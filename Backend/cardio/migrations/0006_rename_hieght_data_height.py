# Generated by Django 4.0.4 on 2022-05-22 08:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cardio', '0005_alter_data_active_alter_data_age_alter_data_alco_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='data',
            old_name='hieght',
            new_name='height',
        ),
    ]
