from django.urls import path
from .views import EntryCreateView, EntryListView

urlpatterns = [
    path('', EntryCreateView.as_view(), name='entry-create'),
    path('list/', EntryListView.as_view(), name='entry-list'),
]
