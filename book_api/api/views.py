from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PublisherSerializer, BookSerializer, UserProfileSerializer, ProfileSerializer, GetBookSerializer, CartItemSerializer, TransactionSerializer
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from .models import Profile, Book, Cart, CartItem, Transaction
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db.models import Sum

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def getRoutes(request):
    routes = [
        'POST /api/auth/register',
        'POST /api/auth/token/',
        'POST /api/auth/token/refresh/',
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

    return Response({'message': f'Register {user.username} Successful'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def UserLogout(request):
    request.user.auth_token.delete()
    logout(request)
    return Response({'message':'logout successful'}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetUser(request):
    user = request.user
    profile = Profile.objects.filter(user=user).first()
    serializer = ProfileSerializer(profile)

    if profile.role == 'publisher':
        recent_books = Book.objects.filter(publisher=profile).order_by('-id')[:3]
        book_serializer = BookSerializer(recent_books, many=True)
        return Response({
            'username': user.username,
            'profile': serializer.data,
            'recent_books': book_serializer.data
        })
    
    elif profile.role == 'customer':
        # total_spending = Transaction.objects.filter(user=user).aggregate(Sum('total_amount')['total_amount__sum']) or 0
        total_spending = Transaction.objects.filter(user=user).aggregate(Sum('total_amount'))['total_amount__sum'] or 0
        return Response({
            'username': user.username,
            'profile': serializer.data,
            'total_spending': total_spending,
        })
    
    return Response({
            'username': user.username,
            'profile': serializer.data,
        })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddBook(request):
    publisher = request.user.profile
    data = request.data
    uploaded_file = request.FILES.get('cover')
    data['cover'] = uploaded_file

    print(f'\n\n{data}\n\n')

    serializer = BookSerializer(data=data)
    if serializer.is_valid():
        book = serializer.save(publisher=publisher)
        return Response({'message': 'Book Added Successfully'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def GetAllBooks(request):
    books = Book.objects.all()
    serializer = GetBookSerializer(books, many=True)
    return Response({'books': serializer.data}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def GetBook(request, pk):
    book = Book.objects.get(id=pk)
    serializer = GetBookSerializer(book, many=False)
    return Response({'books': serializer.data, 'name':book.publisher.fullname}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddToCart(request):
    user = request.user
    cart = Cart.objects.get_or_create(user=user)[0]
    book_id = request.data.get('book_id')
    quantity = request.data.get('quantity', 1)

    book = Book.objects.get(id=book_id)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, book=book)
    if not created:
        cart_item.quantity += int(quantity)
        cart_item.save()

    serializer = CartItemSerializer(cart_item)
    return Response({'items': serializer.data}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ViewCart(request):
    user = request.user
    cart = Cart.objects.get(user=user)
    items = cart.cartitem_set.all()
    serializer = CartItemSerializer(items, many=True)
    return Response({'items': serializer.data}, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def EditBook(request, pk):
    book = Book.objects.get(id=pk)
    data = request.data
    cover = request.FILES.get('cover')

    if book.publisher.user.id != request.user.id:
        return Response({'message': 'user not authorized'}, status=status.HTTP_401_UNAUTHORIZED)
    
    serializer = BookSerializer(book, data=data, partial=True)
    if serializer.is_valid():
        if cover:
            serializer.save(cover=cover)
            return Response({'message': 'book updated'}, status=status.HTTP_200_OK)
        serializer.save()
        return Response({'message': 'book updated'}, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def EditProfile(request):
    profile = Profile.objects.get(user=request.user)
    data = request.data

    serializer = ProfileSerializer(profile, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'user profile has been updated'}, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def Checkout(request):
    user = request.user
    cart = Cart.objects.get(user=user)

    cart_items = CartItem.objects.filter(cart=cart)

    total_amount = sum(item.book.price * item.quantity for item in cart_items)

    transaction = Transaction.objects.create(
        user=user,
        total_amount=total_amount,
        cart=cart,
        status='completed'
    )

    cart_items.delete()

    return Response({'message': 'Transaction successful', 'transaction_id': transaction.id}, status=status.HTTP_200_OK)