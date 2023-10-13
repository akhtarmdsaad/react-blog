from django.shortcuts import render
from rest_framework.viewsets import ViewSet,ModelViewSet
from api.models import Blog
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.authentication import BasicAuthentication
from .serializers import BlogSerializer

# Create your views here.
class BlogViewset(ModelViewSet):
    queryset = Blog.objects.all()
    permission_classes = [AllowAny]
    # authentication_classes = []
    serializer_class = BlogSerializer

    class Meta:
        model = Blog 
        fields = ["id","content","author","date_created"]
