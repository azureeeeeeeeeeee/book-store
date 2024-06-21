from rest_framework import serializers
from .models import Book, Profile
from django.contrib.auth.models import User

class PublisherSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=150)
    email = serializers.EmailField()


class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=200)
    author = serializers.CharField(max_length=100)
    publisher = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.filter(role="publisher"), allow_null=True)


class ProfileSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), allow_null=True)
    fullname = serializers.CharField(max_length=150)