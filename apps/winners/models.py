from django.db import models
from django.core.validators import EmailValidator

class WeeklyWinner(models.Model):
    # Winner Information
    winner_name = models.CharField(max_length=100)
    winner_email = models.EmailField(validators=[EmailValidator()], blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    
    # Family Information
    family_size = models.IntegerField()
    children_ages = models.TextField(blank=True)
    
    # Winner Details
    amount_received = models.DecimalField(max_digits=10, decimal_places=2)
    week_ending = models.DateField()
    story_summary = models.TextField()
    photo = models.ImageField(upload_to='winners/', blank=True, null=True)
    
    # System Fields
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-week_ending']
        verbose_name = "Weekly Winner"
        verbose_name_plural = "Weekly Winners"
    
    def __str__(self):
        return f"{self.winner_name} - Week of {self.week_ending}"
