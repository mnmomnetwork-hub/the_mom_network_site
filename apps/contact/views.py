from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            message = serializer.save()
            
            # Send notification email
            try:
                send_mail(
                    subject=f'New Contact Message: {message.subject}',
                    message=f'From: {message.name} <{message.email}>\n\nMessage:\n{message.message}',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.DEFAULT_FROM_EMAIL],
                    fail_silently=True,
                )
                
                # Send confirmation to sender
                send_mail(
                    subject='Message Received - The Mom Network',
                    message=f'Dear {message.name},\n\nThank you for contacting The Mom Network. We have received your message and will respond as soon as possible.\n\nBest regards,\nThe Mom Network Team',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[message.email],
                    fail_silently=True,
                )
            except:
                pass
            
            return Response(
                {'message': 'Message sent successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactMessageListView(generics.ListAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
