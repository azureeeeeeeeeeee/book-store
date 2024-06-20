from django.contrib import admin
from .models import Publisher, Profile, Book

# Register your models here.
admin.site.register(Publisher)
admin.site.register(Profile)
admin.site.register(Book)