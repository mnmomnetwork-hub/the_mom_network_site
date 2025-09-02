from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Entry
from .serializers import EntrySerializer

class EntryCreateView(generics.CreateAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            entry = serializer.save()
            
            # Send confirmation email
            try:
                send_mail(
                    subject='Application Received - The Mom Network',
                    message=f'Dear {entry.first_name},\n\nThank you for your application to The Mom Network. We have received your request and will review it shortly.\n\nBest regards,\nThe Mom Network Team',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[entry.email],
                    fail_silently=True,
                )
            except:
                pass
            
            return Response(
                {'message': 'Application submitted successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EntryListView(generics.ListAPIView):
    queryset = Entry.objects.filter(is_approved=True)
    serializer_class = EntrySerializer
