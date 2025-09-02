from django.urls import path
from .views import DonationCreateView, DonationListView

urlpatterns = [
    path('', DonationCreateView.as_view(), name='donation-create'),
    path('list/', DonationListView.as_view(), name='donation-list'),
]
