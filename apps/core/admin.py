from django.contrib import admin
from .models import SiteSettings

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ['site_name', 'weekly_goal', 'current_week_total', 'is_active', 'updated_at']
    list_editable = ['weekly_goal', 'current_week_total', 'is_active']
    readonly_fields = ['created_at', 'updated_at']
