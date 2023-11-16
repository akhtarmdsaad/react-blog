from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Categories(models.TextChoices):
    WORLD = "WORLD"
    ENVIRONMENT = "ENVIRONMENT"
    TECHNOLOGY = "TECHNOLOGY"
    DESIGN = "DESIGN"
    CULTURE = "CULTURE"
    BUSINESS = "BUSINESS"
    POLITICS = "POLITICS"
    OPINION = "OPINION"
    SCIENCE = "SCIENCE"
    HEALTH = "HEALTH"
    STYLE = "STYLE"
    TRAVEL = "TRAVEL"


class BlogPost(models.Model):
    title = models.CharField(_("title"), max_length=50)
    slug = models.SlugField(_("slug"))
    category = models.CharField(_("category"), max_length=50,choices = Categories.choices,default = Categories.WORLD)
    thumbnail = models.ImageField(_("thumbnail"), upload_to='photos/%Y/%m/%d', height_field=None, width_field=None, max_length=None)
    excerpt = models.CharField(_("excerpt"), max_length=50)
    month = models.CharField(_("month"), max_length=3)
    day = models.CharField(_("day"), max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default = False)
    date_created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while (queryset):
            slug = original_slug + "-" + str(count)
            count+=1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug 
        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False 
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        
        super(BlogPost, self).save(*args,**kwargs)

    
    def __str__(self):
        return self.title
    