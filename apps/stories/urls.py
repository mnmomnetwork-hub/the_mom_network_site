from django.urls import path
from .views import StoryCreateView, StoryListView

urlpatterns = [
    path('', StoryCreateView.as_view(), name='story-create'),
    path('list/', StoryListView.as_view(), name='story-list'),
]
