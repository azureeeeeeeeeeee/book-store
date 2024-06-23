from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PublisherSerializer, BookSerializer, UserProfileSerializer
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from .models import Profile, Book
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def getRoutes(request):
    routes = [
        'POST /api/auth/login',
        'POST /api/auth/register',
        'POST /api/auth/login',
    ]
    return Response(routes)


@api_view(['POST'])
@permission_classes([AllowAny])
def UserLogin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user:
        token, created = Token.objects.get_or_create(user=user)
        login(request, user)
        return Response({'message': 'Login Sucessful', 'token': token.key}, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([AllowAny])
def UserRegister(request):
    username = request.data.get('username')
    password = request.data.get('password')
    fullname = request.data.get('fullname')
    role = request.data.get('role')

    user = User.objects.create_user(username=username, password=password)
    user.save()

    Profile.objects.create(
        user=user,
        fullname=fullname,
        role=role
    )

    return Response({'message': f'Register {user.username} Successful'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def UserLogout(request):
    request.user.auth_token.delete()
    logout(request)
    return Response({'message':'logout successful'}, status=status.HTTP_200_OK)