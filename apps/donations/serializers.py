from rest_framework import serializers
from .models import Donation

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = "__all__"
        read_only_fields = ("id", "created_at", "completed_at", "stripe_session_id", "stripe_payment_intent_id", "stripe_customer_id", "payment_status", "updated_at")
