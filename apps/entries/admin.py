from django.contrib import admin
from .models import Entry

@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'city', 'state', 'family_size', 'is_approved', 'is_selected', 'created_at']
    list_filter = ['is_approved', 'is_selected', 'state', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'city']
    list_editable = ['is_approved', 'is_selected']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),
        ('Address', {
            'fields': ('address', 'city', 'state', 'zip_code')
        }),
        ('Family Information', {
            'fields': ('family_size', 'children_ages')
        }),
        ('Financial Information', {
            'fields': ('monthly_income', 'monthly_expenses')
        }),
        ('Situation', {
            'fields': ('current_situation', 'how_help_would_be_used', 'additional_info')
        }),
        ('Status', {
            'fields': ('is_approved', 'is_selected')
        }),
        ('System', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
