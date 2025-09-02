from django import forms
from .models import Story

class StoryForm(forms.ModelForm):
    class Meta:
        model = Story
        fields = ['author_name', 'author_email', 'author_city', 'author_state', 'title', 'story_content', 'story_type']
        widgets = {
            'author_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Name'}),
            'author_email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'your.email@example.com'}),
            'author_city': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your City'}),
            'author_state': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your State'}),
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Story Title'}),
            'story_content': forms.Textarea(attrs={'class': 'form-control', 'rows': 8, 'placeholder': 'Share your story...'}),
            'story_type': forms.Select(attrs={'class': 'form-control'}),
        }
