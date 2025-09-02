from django.db import models
from django.core.validators import EmailValidator

class Story(models.Model):
    # Author Information
    author_name = models.CharField(max_length=100)
    author_email = models.EmailField(validators=[EmailValidator()])
    author_city = models.CharField(max_length=100, blank=True)
    author_state = models.CharField(max_length=50, blank=True)
    
    # Story Content
    title = models.CharField(max_length=200)
    story_content = models.TextField()
    
    # Story Type
    STORY_TYPES = [
        ('received_help', 'I Received Help'),
        ('gave_help', 'I Gave Help'),
        ('community_impact', 'Community Impact'),
        ('inspiration', 'Inspiration'),
    ]
    story_type = models.CharField(max_length=20, choices=STORY_TYPES, default='received_help')
    
    # System Fields
    is_approved = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Story"
        verbose_name_plural = "Stories"
    
    def __str__(self):
        return f"{self.title} by {self.author_name}"
    
    def get_story_type_display_short(self):
        return dict(self.STORY_TYPES)[self.story_type]
