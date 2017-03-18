from django.shortcuts import render

def index(request):
    arr_list = [1,2,3,4,5,6]
    context = {'arr_list': arr_list}
    return render(request, 'index.html', context)