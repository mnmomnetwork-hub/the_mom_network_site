from django.db import models
from django.core.validators import EmailValidator

class Nomination(models.Model):
    # Nominator Information
    nominator_name = models.CharField(max_length=100)
    nominator_email = models.EmailField(validators=[EmailValidator()])
    nominator_phone = models.CharField(max_length=20, blank=True)
    relationship_to_nominee = models.CharField(max_length=100)
    
    # Nominee Information
    nominee_name = models.CharField(max_length=100)
    nominee_email = models.EmailField(validators=[EmailValidator()], blank=True)
    nominee_phone = models.CharField(max_length=20, blank=True)
    
    # Nominee Address
    nominee_address = models.CharField(max_length=200)
    nominee_city = models.CharField(max_length=100)
    nominee_state = models.CharField(max_length=50)
    nominee_zip_code = models.CharField(max_length=10)
    
    # Family Information
    family_size = models.IntegerField()
    children_ages = models.TextField(help_text="List ages of children")
    
    # Situation Description
    why_nominating = models.TextField()
    current_challenges = models.TextField()
    how_help_would_impact = models.TextField()
    additional_info = models.TextField(blank=True)
    
    # System Fields
    is_reviewed = models.BooleanField(default=False)
    is_approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Nomination"
        verbose_name_plural = "Nominations"
    
    def __str__(self):
        return f"{self.nominee_name} nominated by {self.nominator_name}"
