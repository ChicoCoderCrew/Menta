#from django.contrib import Profile
from django.contrib import admin
from .models import *

# Register your models here.

class SkillInline(admin.StackedInline):
    model = Skill

class ProfileAdmin(admin.ModelAdmin):
    list_filter = ('userType', 'gender', 'age')
    list_display = ('firstName', 'lastName', 'userType', 'occupation')


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Skill)

