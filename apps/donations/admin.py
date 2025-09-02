from django.contrib import admin
from .models import Donation

@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ['donor_name', 'donor_email', 'amount', 'is_recurring', 'payment_status', 'created_at']
    list_filter = ['is_recurring', 'payment_status', 'created_at']
    search_fields = ['donor_name', 'donor_email', 'stripe_payment_intent_id']
    readonly_fields = ['stripe_payment_intent_id', 'stripe_customer_id', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Donor Information', {
            'fields': ('donor_name', 'donor_email')
        }),
        ('Donation Details', {
            'fields': ('amount', 'is_recurring')
        }),
        ('Payment Information', {
            'fields': ('stripe_payment_intent_id', 'stripe_customer_id', 'payment_status')
        }),
        ('System', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
