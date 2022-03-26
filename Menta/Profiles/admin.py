#from django.contrib import Profile
from django.contrib import admin
from .models import *

# Register your models here.


#admin.site.register(Skill)

class SkillInline(admin.StackedInline):
    model = Skill

class ProfileAdmin(admin.ModelAdmin):
    inlines = [
        SkillInline,
    ]
admin.site.register(Profile, ProfileAdmin)
# admin.site.register(Post, PostAdmin)