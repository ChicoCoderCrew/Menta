from django.shortcuts import render
from .models import Profile
from .models import Skill
from django.http import JsonResponse, HttpResponse
from collections import defaultdict

# get profile
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

# get all skills
def skill_view(request):
    skill = Skill.objects.all()
    listOfSkills=[]
    
    for i in skill:
        content = { 
            "skillName" : i.skillName
        }
        listOfSkills.append(content)

    res = defaultdict(list)
    for sub in listOfSkills:
        for key in sub:
            res[key].append(sub[key])

    return JsonResponse(res)

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
    querylist += "<html><body><p>" + str(x.pk) + " " + x.firstName + " " + x.lastName + " " + x.userType + " " + x.occupation + " " + x.website + " " + str(x.age) + " " + x.gender + " " + "</p></body></html>"
  return HttpResponse(querylist)