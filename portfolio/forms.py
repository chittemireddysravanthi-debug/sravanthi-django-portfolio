from django import forms
from .models import Message

class ContactForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ["name", "email", "subject", "message"]
        widgets = {
            "name": forms.TextInput(attrs={"placeholder": "Your name"}),
            "email": forms.EmailInput(attrs={"placeholder": "Your email"}),
            "subject": forms.TextInput(attrs={"placeholder": "Subject"}),
            "message": forms.Textarea(attrs={"placeholder": "Tell me about the opportunity...", "rows": 5}),
        }
