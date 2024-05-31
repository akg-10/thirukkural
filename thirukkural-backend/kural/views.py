from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Thirukkural
from .serializers import ThirukkuralSerializer
import random


# Create your views here.

class RandomThirukkuralView(APIView):
    def get(self, request):
        count = Thirukkural.objects.count()
        random_index = random.randint(0, count - 1)
        kural = Thirukkural.objects.all()[random_index]
        serializer = ThirukkuralSerializer(kural)
        return Response(serializer.data)
