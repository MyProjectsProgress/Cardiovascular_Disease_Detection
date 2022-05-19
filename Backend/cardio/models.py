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
    name = models.CharField(max_length=100, blank=False)
    age = models.PositiveIntegerField(blank=False)
    hieght = models.PositiveIntegerField(blank=False)
    weight = models.FloatField(blank=False)
    gender = models.PositiveIntegerField(choices=GENDER, blank=False)
    ap_hi = models.PositiveIntegerField(blank=False)  # Systolic blood pressure
    ap_lo = models.PositiveIntegerField(
        blank=False)  # Diastolic blood pressure
    cholesterol = models.PositiveIntegerField(choices=CHOLESTEROL, blank=False)
    gluc = models.PositiveIntegerField(choices=GLUCOSE, blank=False)
    smoking = models.PositiveIntegerField(choices=SMOKE, blank=False)
    alco = models.PositiveIntegerField(choices=ALCOHOL, blank=False)
    active = models.PositiveIntegerField(choices=ACTIVE, blank=False)
    cardio = models.CharField(max_length=100, blank=True)
    date = models.DateTimeField(auto_now_add=True)
