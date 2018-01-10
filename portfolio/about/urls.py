"""URLs for the about me view."""

from django.urls import path
from about import views

app_name = 'about'

urlpatterns = [
    path('me', views.about_view, name='me'),
    path('skills', views.skills_view, name='skills'),
    path('education', views.education_view, name='education'),
]