from django.db import models
from django.contrib.auth.models import User

class NIP(models.Model):
    number = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.number

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    file = models.ImageField(upload_to='./projects/', blank=True, null=True)
    tags = models.ManyToManyField('Tag', blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    nip = models.OneToOneField(NIP, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title