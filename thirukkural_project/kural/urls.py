from django.urls import path
from .views import RandomThirukkuralView

urlpatterns = [
    path('api/random-kural/', RandomThirukkuralView.as_view(), name='random-kural')
]
