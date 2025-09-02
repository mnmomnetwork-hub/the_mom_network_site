from django.db import models
from django.core.validators import EmailValidator

class Donation(models.Model):
    # Donor Information
    donor_name = models.CharField(max_length=100)
    donor_email = models.EmailField(validators=[EmailValidator()])
    
    # Donation Details
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_recurring = models.BooleanField(default=False)
    
    # Payment Information
    stripe_payment_intent_id = models.CharField(max_length=200, blank=True)
    stripe_customer_id = models.CharField(max_length=200, blank=True)
    payment_status = models.CharField(max_length=50, default='pending')
    
    # System Fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Donation"
        verbose_name_plural = "Donations"
    
    def __str__(self):
        return f"${self.amount} from {self.donor_name}"
