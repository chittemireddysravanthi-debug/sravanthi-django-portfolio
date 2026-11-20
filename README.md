# Sravanthi's Django Developer Portfolio

A responsive animated portfolio website built with Python, Django, HTML, CSS and JavaScript.

## 1. Setup (Windows PowerShell)

```powershell
py -m venv venv
venv\Scripts\activate
py -m pip install -r requirements.txt
py manage.py makemigrations
py manage.py migrate
py manage.py createsuperuser
py manage.py runserver
```

Open http://127.0.0.1:8000/

## 2. Add and edit projects

Open http://127.0.0.1:8000/admin/ and sign in with the superuser you created.
Add projects under **Projects**. You can add title, description, technologies, GitHub/demo URLs and an optional image.

## 3. Important personal details to verify

Before publishing, update the email address in `templates/portfolio/home.html`, verify your LinkedIn and GitHub URLs, and replace any project descriptions or links that need correction. Add your own portrait and project screenshots if desired.

## 4. Add an introduction video

Put your MP4 in `media/intro.mp4`. The video panel in `templates/portfolio/home.html` is currently a visual placeholder; replace its `video-placeholder` div with:

```html
<video controls playsinline width="100%">
  <source src="/media/intro.mp4" type="video/mp4">
  Your browser does not support video.
</video>
```

## 5. Before deployment

This is a local development starter. Before production deployment:
- Set `DEBUG = False` and configure `ALLOWED_HOSTS`.
- Use a secure environment-based `SECRET_KEY`.
- Configure static files with WhiteNoise or your host's static-file service.
- Use a production database and HTTPS.
- Configure media storage for uploaded project images.
