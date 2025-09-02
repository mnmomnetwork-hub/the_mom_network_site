from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Nomination
from .serializers import NominationSerializer

class NominationCreateView(generics.CreateAPIView):
    queryset = Nomination.objects.all()
    serializer_class = NominationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            nomination = serializer.save()
            
            # Send confirmation email to nominator
            try:
                send_mail(
                    subject='Nomination Received - The Mom Network',
                    message=f'Dear {nomination.nominator_name},\n\nThank you for nominating {nomination.nominee_name} for help through The Mom Network. We have received your nomination and will review it shortly.\n\nBest regards,\nThe Mom Network Team',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[nomination.nominator_email],
                    fail_silently=True,
                )
            except:
                pass
            
            return Response(
                {'message': 'Nomination submitted successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NominationListView(generics.ListAPIView):
    queryset = Nomination.objects.filter(is_approved=True)
    serializer_class = NominationSerializer
