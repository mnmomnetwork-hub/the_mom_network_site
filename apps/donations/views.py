from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Sum, Count
import stripe
from .models import Donation
from .utils import start_stripe_checkout, create_payment_intent, create_customer
from rest_framework import viewsets, generics, status
from .serializers import DonationSerializer

@api_view(["POST"])
def checkout(request):
    amount_cents = int(request.data.get("amount_cents", 200))
    url = start_stripe_checkout(amount_cents=amount_cents)
    return Response({"url": url})

@api_view(["GET"])
def summary(request):
    totals = Donation.objects.aggregate(total=Sum("amount_cents"), count=Count("id"))
    return Response({
        "totalAmount": (totals["total"] or 0) / 100,
        "totalCount": totals["count"] or 0,
        "recent": list(Donation.objects.order_by("-created_at").values("amount_cents", "created_at")[:5]),
    })

@csrf_exempt
def stripe_webhook(request):
    if not settings.STRIPE_WEBHOOK_SECRET or not settings.STRIPE_SECRET_KEY:
        return JsonResponse({"error": "Stripe not configured"}, status=503)

    payload = request.body
    sig_header = request.META.get("HTTP_STRIPE_SIGNATURE")
    stripe.api_key = settings.STRIPE_SECRET_KEY

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, settings.STRIPE_WEBHOOK_SECRET)
    except Exception:
        return HttpResponse(status=400)

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        session_id = session.get("id")
        email = session.get("customer_details", {}).get("email")

        try:
            donation = Donation.objects.get(stripe_session_id=session_id)
            donation.status = "completed"
            donation.donor_email = donation.donor_email or (email or "")
            donation.save()
        except Donation.DoesNotExist:
            pass

    return HttpResponse(status=200)

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all().order_by("-created_at")
    serializer_class = DonationSerializer

class DonationCreateView(generics.CreateAPIView):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            donation = serializer.save()
            
            # Create Stripe payment intent if Stripe is configured
            if settings.STRIPE_SECRET_KEY:
                try:
                    # Create customer
                    customer = create_customer(donation.donor_name, donation.donor_email)
                    donation.stripe_customer_id = customer.id
                    
                    # Create payment intent
                    intent = create_payment_intent(donation.amount, donation.donor_email)
                    donation.stripe_payment_intent_id = intent.id
                    donation.save()
                    
                    return Response({
                        'message': 'Donation created successfully!',
                        'client_secret': intent.client_secret,
                        'donation_id': donation.id
                    }, status=status.HTTP_201_CREATED)
                except Exception as e:
                    return Response({
                        'error': f'Payment processing error: {str(e)}'
                    }, status=status.HTTP_400_BAD_REQUEST)
            else:
                # No Stripe configured, just save the donation
                return Response({
                    'message': 'Donation recorded successfully!',
                    'donation_id': donation.id
                }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DonationListView(generics.ListAPIView):
    queryset = Donation.objects.filter(payment_status='succeeded')
    serializer_class = DonationSerializer
