from django.db import models

# Create your models here.

class Thirukkural(models.Model):
    number = models.IntegerField(unique=True)
    couplet_tamil = models.TextField()
    meaning_tamil = models.TextField()
    couplet_en = models.TextField()
    meaning_en = models.TextField()
    section = models.CharField(max_length=100, default='Unknown Section')
    section_en = models.CharField(max_length=100, default='Unknown Section')
    section_tang = models.CharField(max_length=100, default='Unknown Section')
    chapter_group = models.CharField(max_length=100, default='Unknown Chapter Group')
    chapter_group_en = models.CharField(max_length=100, default='Unknown Chapter Group')
    chapter_group_tang = models.CharField(max_length=100, default='Unknown Chapter Group')
    chapter = models.CharField(max_length=100, default='Unknown Chapter')
    chapter_en = models.CharField(max_length=100, default='Unknown Chapter')
    chapter_tang = models.CharField(max_length=100, default='Unknown Chapter')

    def __str__(self):
        return f"{self.number}: {self.couplet_tamil}"