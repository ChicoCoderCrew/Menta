from django.db import models

# Create your models here.

class Profile(models.Model):

    name= models.CharField(verbose_name= 'First and Last name', max_length=100)


    TYPE_CHOICES = [
        ('MO', 'Mentor'),
        ('ME', 'Mentee'),
    ]
    userType= models.CharField(verbose_name='Mentor/Mentee', choices= TYPE_CHOICES, max_length=100)

    occupation= models.CharField(verbose_name= 'Occupation', max_length=100)
    
    age= models.PositiveSmallIntegerField(verbose_name= 'Age')

    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    gender= models.CharField(verbose_name='Gender', choices= GENDER_CHOICES, max_length=100)

    biography= models.TextField(verbose_name='Personal Bio', max_length=2000)

    photos= models.ImageField(verbose_name='Headshot')
