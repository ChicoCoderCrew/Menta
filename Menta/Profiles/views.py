from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework import viewsets

# from .serializers import ProfileSerializer
from .models import Profile


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('name')
    # serializer_class = ProfileSerializer