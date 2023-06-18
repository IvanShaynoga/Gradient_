# Generated by Django 3.2.18 on 2023-06-18 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actors', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='actor',
            options={'ordering': ['pub_date'], 'verbose_name': 'Актёр', 'verbose_name_plural': 'Актёры'},
        ),
        migrations.AddField(
            model_name='actor',
            name='pub_date',
            field=models.IntegerField(default=100, unique=True, verbose_name='Индекс сортировки'),
            preserve_default=False,
        ),
    ]
