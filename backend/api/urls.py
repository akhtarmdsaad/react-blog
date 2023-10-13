from rest_framework.routers import DefaultRouter
from api.views import BlogViewset

router = DefaultRouter()
urlpatterns = [
    
]

router.register(r"blog",BlogViewset,basename="Blog")








urlpatterns += router.urls