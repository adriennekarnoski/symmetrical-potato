from django.shortcuts import render


def home_view(request):
    """Home view callable, for the home page."""
    return render(request, 'portfolio/home.html')