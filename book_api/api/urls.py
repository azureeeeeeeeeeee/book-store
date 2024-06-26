from . import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('auth/login/', views.UserLogin, name='login'),
    path('auth/register/', views.UserRegister, name='register'),
    path('auth/logout/', views.UserLogout, name='logout'),

    path('profile/', views.GetUser, name='user-profile'),

    path('books/', views.GetAllBooks, name='books'),
    path('books/add/', views.AddBook, name='add-book'),
]