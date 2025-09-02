from django.contrib import admin
from .models import Nomination

@admin.register(Nomination)
class NominationAdmin(admin.ModelAdmin):
    list_display = ['nominee_name', 'nominator_name', 'nominee_city', 'nominee_state', 'family_size', 'is_reviewed', 'is_approved', 'created_at']
    list_filter = ['is_reviewed', 'is_approved', 'nominee_state', 'created_at']
    search_fields = ['nominee_name', 'nominator_name', 'nominee_email', 'nominator_email']
    list_editable = ['is_reviewed', 'is_approved']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Nominator Information', {
            'fields': ('nominator_name', 'nominator_email', 'nominator_phone', 'relationship_to_nominee')
        }),
        ('Nominee Information', {
            'fields': ('nominee_name', 'nominee_email', 'nominee_phone')
        }),
        ('Nominee Address', {
            'fields': ('nominee_address', 'nominee_city', 'nominee_state', 'nominee_zip_code')
        }),
        ('Family Information', {
            'fields': ('family_size', 'children_ages')
        }),
        ('Situation', {
            'fields': ('why_nominating', 'current_challenges', 'how_help_would_impact', 'additional_info')
        }),
        ('Status', {
            'fields': ('is_reviewed', 'is_approved')
        }),
        ('System', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
