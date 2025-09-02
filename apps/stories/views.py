from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Story
from .serializers import StorySerializer

class StoryCreateView(generics.CreateAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            story = serializer.save()
            
            # Send confirmation email
            try:
                send_mail(
                    subject='Story Submitted - The Mom Network',
                    message=f'Dear {story.author_name},\n\nThank you for sharing your story with The Mom Network. We have received your submission and will review it for publication.\n\nBest regards,\nThe Mom Network Team',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[story.author_email],
                    fail_silently=True,
                )
            except:
                pass
            
            return Response(
                {'message': 'Story submitted successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StoryListView(generics.ListAPIView):
    queryset = Story.objects.filter(is_approved=True)
    serializer_class = StorySerializer
