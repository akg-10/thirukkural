from rest_framework import serializers
from .models import Thirukkural

class ThirukkuralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thirukkural
        fields = ['number', 'couplet', 'meaning']
