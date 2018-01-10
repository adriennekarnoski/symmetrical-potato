from django.shortcuts import render


def projects_view(request):
    """Projects view callable, for the main page of projects."""
    return render(request, 'projects/projects.html')


def one_view(request):
    """Projects view callable, for the main page of projects."""
    return render(request, 'projects/project_one.html')