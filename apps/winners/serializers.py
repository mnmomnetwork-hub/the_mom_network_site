from rest_framework import serializers
from .models import WeeklyWinner

class WeeklyWinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeeklyWinner
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']
