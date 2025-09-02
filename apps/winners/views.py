from rest_framework import generics
from .models import WeeklyWinner
from .serializers import WeeklyWinnerSerializer

class WeeklyWinnerListView(generics.ListAPIView):
    queryset = WeeklyWinner.objects.filter(is_active=True)
    serializer_class = WeeklyWinnerSerializer

class WeeklyWinnerDetailView(generics.RetrieveAPIView):
    queryset = WeeklyWinner.objects.filter(is_active=True)
    serializer_class = WeeklyWinnerSerializer
