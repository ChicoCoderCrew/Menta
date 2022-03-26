from django.db import models

# Create your models here.

class Skill(models.Model):
   
    skillName= models.CharField(verbose_name='Skill', max_length=100)

    SKILL_CHOICES = [
        ('B', 'Beginner'),
        ('I', 'Intermediate'),
        ('E', 'Expert'),
    ]
    level= models.CharField(verbose_name='Proficiency', choices= SKILL_CHOICES, max_length=100, default= 'B')


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

    photos= models.URLField(verbose_name='Headshot URL')

    skills = models.ManyToManyField(Skill)
