from django.db import models

# Create your models here.

GENDER = (
    (1, 'Female'),
    (2, 'Male')
)
SMOKE = (
    (1, 'YES'),
    (0, 'NO')
)
ALCOHOL = (
    (1, 'YES'),
    (0, 'NO')
)
ACTIVE = (
    (1, 'YES'),
    (0, 'NO')
)
CHOLESTEROL = (
    (1, 'normal'),
    (2, 'above normal'),
    (3, 'well above normal')
)
GLUCOSE = (
    (1, 'normal'),
    (2, 'above normal'),
    (3, 'well above normal')
)


class Data(models.Model):
    name = models.CharField(max_length=100, null=True)
    age = models.PositiveIntegerField(null=True)
    hieght = models.PositiveIntegerField(null=True)
    weight = models.FloatField(null=True)
    gender = models.PositiveIntegerField(choices=GENDER, null=True)
    ap_hi = models.PositiveIntegerField(null=True)  # Systolic blood pressure
    ap_lo = models.PositiveIntegerField(null=True)  # Diastolic blood pressure
    cholesterol = models.PositiveIntegerField(choices=CHOLESTEROL, null=True)
    gluc = models.PositiveIntegerField(choices=GLUCOSE, null=True)
    smoking = models.PositiveIntegerField(choices=SMOKE, null=True)
    alco = models.PositiveIntegerField(choices=ALCOHOL, null=True)
    active = models.PositiveIntegerField(choices=ACTIVE, null=True)
    cardio = models.CharField(max_length=100, blank=True)
    date = models.DateTimeField(auto_now_add=True)
