from rest_framework import serializers
from .models import Nomination

class NominationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nomination
        fields = '__all__'
        read_only_fields = ['is_reviewed', 'is_approved', 'created_at', 'updated_at']
