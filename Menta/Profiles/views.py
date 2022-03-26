from django.shortcuts import render
from .models import Profile
from django.http import JsonResponse

def user_view(request, id):
    proId = id
    person = Profile.objects.get(pk=proId)
    content = { 
        "id" : person.id,
        "name": " ".join([person.firstName, person.lastName]),
        "userType" : person.userType,
        "occupation": person.occupation,
        "website" : person.website,
        "age" : person.age,
        "gender" : person.gender,
        "bio" : person.biography,
        #"photos" : person.photos,
        "skills": [
            "Javascript",
            "C++"
        ]
    }

    return JsonResponse(content)