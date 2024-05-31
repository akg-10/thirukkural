from django.db import models

# Create your models here.

class Thirukkural(models.Model):
    number = models.IntegerField(unique=True) 
    couplet = models.CharField(max_length=500)
    meaning = models.TextField()

    def __str__(self):
        return f"{self.number}: {self.couplet}"
