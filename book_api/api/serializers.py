from rest_framework import serializers
from .models import Book, Profile
from django.contrib.auth.models import User

class PublisherSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=150)
    email = serializers.EmailField()


class BookSerializer(serializers.ModelSerializer):
    cover = serializers.ImageField(allow_empty_file=True, required=False)
    class Meta:
        model = Book
        fields = '__all__'

    def create(self, validated_data):
        publisher = validated_data.pop('publisher', None)
        book = Book.objects.create(publisher=publisher, **validated_data)
        return book

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), allow_null=True)

    class Meta:
        model = Profile
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'fullname', 'role']