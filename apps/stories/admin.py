from django.contrib import admin
from .models import Story

@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'author_name', 'author_city', 'story_type', 'is_approved', 'is_featured', 'created_at']
    list_filter = ['is_approved', 'is_featured', 'story_type', 'author_state', 'created_at']
    search_fields = ['title', 'author_name', 'author_email', 'story_content']
    list_editable = ['is_approved', 'is_featured']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Author Information', {
            'fields': ('author_name', 'author_email', 'author_city', 'author_state')
        }),
        ('Story Content', {
            'fields': ('title', 'story_content', 'story_type')
        }),
        ('Status', {
            'fields': ('is_approved', 'is_featured')
        }),
        ('System', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
