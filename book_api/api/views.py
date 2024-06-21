from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PublisherSerializer, BookSerializer, ProfileSerializer
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from .models import Publisher, Profile, Book
from django.contrib.auth.models import User

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'POST /api/auth/login',
        'POST /api/auth/register',
        'POST /api/auth/login',
    ]
    return Response(routes)