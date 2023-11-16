# Generated by Django 4.2.7 on 2023-11-14 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='title')),
                ('slug', models.SlugField(verbose_name='slug')),
                ('category', models.CharField(choices=[('WORLD', 'World'), ('ENVIRONMENT', 'Environment'), ('TECHNOLOGY', 'Technology'), ('DESIGN', 'Design'), ('CULTURE', 'Culture'), ('BUSINESS', 'Business'), ('POLITICS', 'Politics'), ('OPINION', 'Opinion'), ('SCIENCE', 'Science'), ('HEALTH', 'Health'), ('STYLE', 'Style'), ('TRAVEL', 'Travel')], default='WORLD', max_length=50, verbose_name='category')),
                ('thumbnail', models.ImageField(upload_to='photos/%Y/%m/%d', verbose_name='thumbnail')),
                ('excerpt', models.CharField(max_length=50, verbose_name='excerpt')),
                ('month', models.CharField(max_length=3, verbose_name='month')),
                ('day', models.CharField(max_length=2, verbose_name='day')),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
