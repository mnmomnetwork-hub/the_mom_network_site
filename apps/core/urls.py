from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('mission/', views.mission, name='mission'),
    path('who-we-help/', views.who_we_help, name='who_we_help'),
    path('videos/', views.videos, name='videos'),
    path('winners/', views.winners, name='winners'),
    path('resources/', views.resources, name='resources'),
    path('share-story/', views.share_story, name='share_story'),
    path('apply/', views.apply, name='apply'),
    path('contact/', views.contact, name='contact'),
    path('donate/', views.donate, name='donate'),
    path('privacy/', views.privacy, name='privacy'),
    path('terms/', views.terms, name='terms'),
    path('faq/', views.faq, name='faq'),
    path('stories/', views.stories_list, name='stories_list'),
    path('stories/<int:pk>/', views.story_detail, name='story_detail'),
]
