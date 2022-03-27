from django.shortcuts import render
from .models import Profile
from django.http import JsonResponse, HttpResponse

def user_view(request, id):
    proId = id
    person = Profile.objects.get(pk=proId)

    result_list = list(person.skills.values('skillName', 'level'))
    
    skillList=[]
    for x in result_list:
        skillList.append(x['skillName'])
    
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
        "skills": skillList
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


#save a profile
def saveProfile(request):
  profToSave = Profile(firstName='n00b', userType='Mentee', age= 0, gender= 'Other', biography= 'i like to hack, and sack.')
  profToSave.save()
  return HttpResponse(profToSave)

# retrieve all objects
def getAllProf(request):
  all_entries = Profile.objects.all()
  querylist = " "
  for x in all_entries:
    querylist += "<html><body><p>" + str(x.pk) + " " + x.firstName + " " + x.lastName + " " + x.userType + " " + x.occupation + " " + x.website + " " + str(x.age) + " " + x.gender + " " + x.contact + "</p></body></html>"
  return HttpResponse(querylist)


# #retrieve an object
# def getProfile(request):
#   # Profile.objects
#   pulledProfile = Profile.objects.get(pk=1)
#   # pulledProfile.objects
