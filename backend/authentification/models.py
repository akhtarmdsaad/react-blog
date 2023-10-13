from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser,PermissionsMixin


class UserManager(BaseUserManager):
    # create_user(username_field,*required fields, password=None, **other_fields)
    def create_user(self, username,first_name, last_name, password=None):

        if not username:
            raise ValueError("User must have a unique username")

        user = User(
            username=username,
            first_name=first_name,
            last_name = last_name
        )
        user.set_password(password)
        user.save()
        return user
    # create_superuser(self, email,*required fields, password=None, **other_fields):
    def create_superuser(self, username, first_name, last_name, password=None):
        # create superuser here
        user = self.create_user(
            username=username,
            first_name=first_name,
            last_name=last_name,
            password=password
        )
        user.is_superuser = True
        user.is_active = True
        user.is_staff = True

        user.save()
        return  user

class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=50,unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    

    objects = UserManager()
    USERNAME_FIELD = 'email'

    def __str__(self) -> str:
        return self.username