from django.contrib import admin
from .models import Project, Message

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "featured")
    list_filter = ("featured",)
    search_fields = ("title", "technologies")

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")
    search_fields = ("name", "email")
    readonly_fields = ("created_at",)
