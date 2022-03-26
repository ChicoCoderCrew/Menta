from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile
#from .serializers  import ProfileSerializer
import json
from django.core import serializers
from django.http import JsonResponse
from rest_framework import viewsets

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
    #allProfiles = Profile.objects.all()
    # content = "<html><body><h1>%s %s</h1><p>You're a %s </p></body></html>" % (allProfiles[0].firstName, allProfiles[0].lastName, allProfiles[0].userType) 
    #content = "<html><body><h1>" + allProfiles[0].firstName + " " + allProfiles[0].lastName + "</h1><p>You're a " + allProfiles[0].userType + "</p></body></html>" 
    # content = "<html><body><h1>{} {}</h1><p>You're a {} </p></body></html>".format(allProfiles[0].firstName, allProfiles[0].lastName, allProfiles[0].userType) 
    
    person = Profile.objects.get(firstName='Parth')
    content = { 
        "id" : person.id,
        "firstName": person.firstName,
        "lastName" : person.lastName,
        "userType" : person.userType,
        "occupation": person.occupation,
        "website" : person.website,
        "age" : person.age,
        "gender" : person.gender,
        "biography" : person.biography,
        #"photos" : person.photos,
        "skills": [
            "Javascript",
            "C++"
        ]
    }

    # print(person)
    # one_entry = person
    #list_result = [entry for entry in one_entry]
    #json_string = json.dumps(list_result)     
    # return JsonResponse(person)
    #return person

    return JsonResponse(content)
  
#class ProfileViewSet(viewsets.ModelViewSet):
    

    
