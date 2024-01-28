from django.urls import path
from .views import ProjectList, ProjectCreate, ProjectDelete

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('addProject/', ProjectCreate.as_view(), name='project-create'),
    path('projects/delete/<int:pk>/', ProjectDelete.as_view(), name='project-delete'),
]


