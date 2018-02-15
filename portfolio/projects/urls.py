"""URLs for the projects view."""

from django.urls import path
from projects import views

app_name = 'projects'

urlpatterns = [
    path('', views.projects_view, name='projects'),
    path('one', views.one_view, name='one'),
]