from . import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('auth/login/', views.UserLogin, name='login'),
    path('auth/register/', views.UserRegister, name='register'),
    path('auth/logout/', views.UserLogout, name='logout'),

    path('profile/', views.GetUser, name='user-profile'),
    path('profile/edit/', views.EditProfile, name='edit-profile'),

    path('books/', views.GetAllBooks, name='books'),
    path('books/add/', views.AddBook, name='add-book'),
    path('books/edit/<str:pk>/', views.EditBook, name='edit-book'),
    path('books/<str:pk>/', views.GetBook, name='get-book'),

    path('cart/view/', views.ViewCart, name='get-cart'),
    path('cart/add/', views.AddToCart, name='add-cart'),

    path('checkout/', views.Checkout, name='checkout'),
]