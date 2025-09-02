from django.db import models

class SiteSettings(models.Model):
    site_name = models.CharField(max_length=100, default="The Mom Network")
    weekly_goal = models.DecimalField(max_digits=10, decimal_places=2, default=500.00)
    current_week_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return f"{self.site_name} Settings"
