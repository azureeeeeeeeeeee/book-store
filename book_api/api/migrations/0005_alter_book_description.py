# Generated by Django 5.0.4 on 2024-06-24 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_book_publisher_profile_role_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.TextField(max_length=1500),
        ),
    ]