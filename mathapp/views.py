from django.shortcuts import render

# Create your views here.

def mathadd(request):
    context = {}
    return render(request, 'mathapp/mathadd.html', context)


def mathcylindervolume(request):
    context = {}
    return render(request, 'mathapp/mathcylindervolume.html', context)

def rectangularprismvolume(request):
    context = {}
    return render(request, 'mathapp/rectangularprismvolume.html', context)