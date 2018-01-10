from django.shortcuts import render


def about_view(request):
    """About me view."""
    return render(request, 'about/about_me.html')


def skills_view(request):
    """Skills view."""
    return render(request, 'about/skills.html')


def education_view(request):
    """Education view."""
    return render(request, 'about/education.html')