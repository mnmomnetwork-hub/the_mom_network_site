from django.urls import path
from .views import NominationCreateView, NominationListView

urlpatterns = [
    path('', NominationCreateView.as_view(), name='nomination-create'),
    path('list/', NominationListView.as_view(), name='nomination-list'),
]
