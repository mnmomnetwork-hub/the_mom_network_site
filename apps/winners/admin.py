from django.contrib import admin
from .models import WeeklyWinner

@admin.register(WeeklyWinner)
class WeeklyWinnerAdmin(admin.ModelAdmin):
    list_display = ['winner_name', 'city', 'state', 'amount_received', 'week_ending', 'is_active', 'created_at']
    list_filter = ['is_active', 'state', 'week_ending', 'created_at']
    search_fields = ['winner_name', 'city', 'state']
    list_editable = ['is_active']
    readonly_fields = ['created_at', 'updated_at']
    date_hierarchy = 'week_ending'
    
    fieldsets = (
        ('Winner Information', {
            'fields': ('winner_name', 'winner_email', 'city', 'state')
        }),
        ('Family Information', {
            'fields': ('family_size', 'children_ages')
        }),
        ('Winner Details', {
            'fields': ('amount_received', 'week_ending', 'story_summary', 'photo')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('System', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
