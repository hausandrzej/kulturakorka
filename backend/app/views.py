from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Project, Tag
from .serializers import ProjectSerializer
from django.shortcuts import get_object_or_404


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectCreate(generics.CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProjectDelete(generics.DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def delete(self, request, *args, **kwargs):
        project = get_object_or_404(Project, pk=kwargs['pk'])
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)