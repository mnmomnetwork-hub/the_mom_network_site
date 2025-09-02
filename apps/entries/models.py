from django.db import models
from django.core.validators import EmailValidator

class Entry(models.Model):
    # Personal Information
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(validators=[EmailValidator()])
    phone = models.CharField(max_length=20, blank=True)
    
    # Address Information
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)
    
    # Family Information
    family_size = models.IntegerField()
    children_ages = models.TextField(help_text="List ages of children")
    
    # Financial Information
    monthly_income = models.DecimalField(max_digits=10, decimal_places=2)
    monthly_expenses = models.DecimalField(max_digits=10, decimal_places=2)
    
    # Situation Description
    current_situation = models.TextField()
    how_help_would_be_used = models.TextField()
    additional_info = models.TextField(blank=True)
    
    # System Fields
    is_approved = models.BooleanField(default=False)
    is_selected = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Entry"
        verbose_name_plural = "Entries"
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.created_at.strftime('%Y-%m-%d')}"
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def full_address(self):
        return f"{self.address}, {self.city}, {self.state} {self.zip_code}"
