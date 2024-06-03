from rest_framework import serializers
from .models import Thirukkural

class ThirukkuralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thirukkural
        fields = ['number', 'couplet_tamil1','couplet_tamil2', 'meaning_tamil', 'couplet_en', 'meaning_en', 'section', 'section_en', 'section_tang', 'chapter_group', 'chapter_group_en', 'chapter_group_tang', 'chapter', 'chapter_en', 'chapter_tang']
