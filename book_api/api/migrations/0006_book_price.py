# Generated by Django 5.0.4 on 2024-06-26 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_book_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
