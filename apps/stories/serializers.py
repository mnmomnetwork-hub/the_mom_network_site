from rest_framework import serializers
from .models import Story

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = '__all__'
        read_only_fields = ['is_approved', 'is_featured', 'created_at', 'updated_at']
