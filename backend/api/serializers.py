from rest_framework.serializers import ModelSerializer
from api.models import Blog

class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
