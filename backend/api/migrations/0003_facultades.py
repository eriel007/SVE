# Generated by Django 5.0.7 on 2024-11-28 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_voto_id_candidato'),
    ]

    operations = [
        migrations.CreateModel(
            name='Facultades',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
            ],
        ),
    ]