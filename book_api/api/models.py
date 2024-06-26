from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=150)
    profile_picture = models.ImageField(upload_to='profile/', blank=True, null=True)
    role = models.CharField(max_length=50, default="customer")

    def __str__(self) -> str:
        return str(self.fullname)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    description = models.TextField(max_length=1500)
    publisher = models.ForeignKey(Profile, null=True, on_delete=models.SET_NULL, limit_choices_to={'role':'publisher'})
    price = models.IntegerField(blank=True, null=True)
    cover = models.ImageField(upload_to='cover/', blank=True, null=True)

    def __str__(self) -> str:
        return str(self.title)
