from django.shortcuts import render
from .models import Profile
from django.http import JsonResponse, HttpResponse

def user_view(request):
    proId = request.GET['id']
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
def get_user(request):

    #retrieve all objects
    allProfiles = Profile.objects.all()
    # content = "<html><body><h1>%s %s</h1><p>You're a %s </p></body></html>" % (allProfiles[0].firstName, allProfiles[0].lastName, allProfiles[0].userType) 
    content = "<html><body><h1>" + allProfiles[0].firstName + " " + allProfiles[0].lastName + "</h1><p>You're a " + allProfiles[0].userType + "</p></body></html>" 
    # content = "<html><body><h1>{} {}</h1><p>You're a {} </p></body></html>".format(allProfiles[0].firstName, allProfiles[0].lastName, allProfiles[0].userType) 
    return HttpResponse(content)
  
# class ProfileViewSet(viewsets.ModelViewSet):
#   queryset = Profile.objects.all().order_by('firstName')
#   # serializer_class = ProfileSerializer



# #retrieve all objects
# def getAllProf(request):
#   allProf = Profile.objects.all.order_by(pk)

#save a profile
def saveProfile(request):
  profToSave = Profile(firstName='n00b', userType='Mentee', age= 0, gender= 'Other', biography= 'i like to hack, and sack.')
  profToSave.save()
  return HttpResponse(profToSave)


# #save a profile
# def createProfile(request):
#   newProfile = Profile(firstName='n00b', userType='Mentee', age= 0, gender= 'Other', biography= 'i like to hack, and sack.')
#   newProfile.save()

# #retrieve an object
# def getProfile(request):
#   # Profile.objects
#   pulledProfile = Profile.objects.get(pk=1)
#   # pulledProfile.objects
