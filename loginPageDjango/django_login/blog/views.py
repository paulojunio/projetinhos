from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

posts = [

    {
        'author': 'PauloJunio',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'July 25, 2018'
    },
    {
        'author': 'PauloJunio',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'July 26, 2018'
    }
]
def home(request):  
    context = {
        'posts': posts,
        'title': 'Home Page'
    }
    return render(request, 'blog/home.html',context)

def about(request):
    return render(request, 'blog/about.html')