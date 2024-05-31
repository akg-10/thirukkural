# kural/management/commands/load_kural.py
import json
from django.core.management.base import BaseCommand
from kural.models import Thirukkural

class Command(BaseCommand):
    help = 'Load Thirukkural data from JSON file'

    def handle(self, *args, **kwargs):
        with open('fixtures/thirukkural.json') as file:
            kurals = json.load(file)
            for kural in kurals:
                Thirukkural.objects.create(
                    number=kural['number'],
                    couplet=kural['couplet'],
                    meaning=kural['meaning']
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded Thirukkural data'))
