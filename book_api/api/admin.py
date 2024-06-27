from django.contrib import admin
from .models import Profile, Book, Cart, CartItem, Transaction

# Register your models here.
# admin.site.register(Publisher)
admin.site.register(Profile)
admin.site.register(Book)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Transaction)