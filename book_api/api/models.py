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

class Cart(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Cart of {self.user.username}"
    
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.quantity} x {self.book.title} in {self.cart}"
    
class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_date = models.DateTimeField(auto_now_add=True)
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
    status = models.CharField(max_length=30)

    def __str__(self) -> str:
        return f"Transaction by {self.user.username} on {self.transaction_date}"