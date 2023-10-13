from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import AnonymousUser

# check_password(password_input, password_in_database)

class LoginBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        pass 

class TokenAuthBackend(BaseBackend):
    def authenticate(self, request, token=None):
        pass