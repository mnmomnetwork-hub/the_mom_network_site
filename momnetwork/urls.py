from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.core.urls')),
    path('api/entries/', include('apps.entries.urls')),
    path('api/stories/', include('apps.stories.urls')),
    path('api/nominations/', include('apps.nominations.urls')),
    path('api/donations/', include('apps.donations.urls')),
    path('api/contact/', include('apps.contact.urls')),
    path('api/winners/', include('apps.winners.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
