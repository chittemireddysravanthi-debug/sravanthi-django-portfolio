from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    technologies = models.CharField(max_length=200, help_text="Separate technologies with commas")
    github_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    image = models.ImageField(upload_to="projects/", blank=True, null=True)
    featured = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=150, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"
