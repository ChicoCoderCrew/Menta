from django.db import models

# Create your models here.

class Profile(models.Model):

    firstName= models.CharField(verbose_name= 'First Name', max_length=100)
    lastName= models.CharField(verbose_name= 'Last Name', max_length=100)

    TYPE_CHOICES = [
        ('MO', 'Mentor'),
        ('ME', 'Mentee'),
    ]
    userType= models.CharField(verbose_name='Mentor/Mentee', choices= TYPE_CHOICES, max_length=100)

    occupation= models.CharField(verbose_name= 'Occupation', max_length=100)

    website= models.URLField(verbose_name='Professional Portfolio URL (GitHub, LinkedIn, etc.)')
    
    age= models.PositiveSmallIntegerField(verbose_name= 'Age')

    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    gender= models.CharField(verbose_name='Gender', choices= GENDER_CHOICES, max_length=100)

    biography= models.TextField(verbose_name='Personal Bio', max_length=2000)

    photos= models.ImageField(verbose_name='Headshot')

# #save a profile
# newProfile = Profile(firstName='n00b', userType='Mentee', age= 0, gender= 'Other', biography= 'i like to hack, and sack.')
# newProfile.save()

# #retrieve an object
# Profile.objects
# pulledProfile = Profile(firstName= 'n00b')
# pulledProfile.objects

# #retrieve all objects
# allProfiles = Profile.objects.all()