from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Project
from .forms import ContactForm

def home(request):
    projects = Project.objects.filter(featured=True).order_by("-id")
    return render(request, "portfolio/home.html", {"projects": projects})

def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Thank you! Your message has been saved.")
            return redirect("home")
    else:
        form = ContactForm()
    return render(request, "portfolio/contact.html", {"form": form})
