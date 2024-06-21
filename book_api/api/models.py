from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Publisher(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    profile_picture = models.ImageField(upload_to='cover/', blank=True, null=True)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    description = models.TextField(max_length=100)
    publisher = models.ForeignKey(Publisher, null=True, on_delete=models.SET_NULL)
    cover = models.ImageField(upload_to='cover/', blank=True, null=True)

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=150)
    profile_picture = models.ImageField(upload_to='cover/', blank=True, null=True)

