from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile

# Create your views here.
def something(request):
    #save a profile
    # newProfile = Profile(firstName='n00b', userType='Mentee', age= 0, gender= 'Other', biography= 'i like to hack, and sack.')
    # newProfile.save()

    #retrieve an object
    # Profile.objects
    # pulledProfile = Profile(firstName= 'n00b')
    # pulledProfile.objects

    #retrieve all objects
    allProfiles = Profile.objects.all()
    # content = "<html><body><h1>%s %s</h1><p>You're a %s </p></body></html>" % (allProfiles[0].firstName, allProfiles[0].lastName, allProfiles[0].userType) 
    content = "<html><body><h1>" + allProfiles[0].firstName + " " + allProfiles[0].lastName + "</h1><p>You're a " + allProfiles[0].userType + "</p></body></html>" 
    # content = "<html><body><h1>{} {}</h1><p>You're a {} </p></body></html>".format(allProfiles[0].firstName, allProfiles[0].lastName, allProfiles[0].userType) 
    return HttpResponse(content)
