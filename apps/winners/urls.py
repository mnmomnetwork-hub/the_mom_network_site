from django.urls import path
from .views import WeeklyWinnerListView, WeeklyWinnerDetailView

urlpatterns = [
    path('', WeeklyWinnerListView.as_view(), name='winner-list'),
    path('<int:pk>/', WeeklyWinnerDetailView.as_view(), name='winner-detail'),
]
