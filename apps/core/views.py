from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm
from apps.winners.models import WeeklyWinner
from apps.stories.models import Story

def home(request):
    recent_winners = WeeklyWinner.objects.filter(is_active=True).order_by('-created_at')[:3]
    featured_stories = Story.objects.filter(is_approved=True, is_featured=True)[:2]
    
    context = {
        'recent_winners': recent_winners,
        'featured_stories': featured_stories,
    }
    return render(request, 'home.html', context)

def mission(request):
    return render(request, 'mission.html')

def who_we_help(request):
    return render(request, 'who_we_help.html')

def videos(request):
    return render(request, 'videos.html')

def winners(request):
    winners = WeeklyWinner.objects.filter(is_active=True).order_by('-created_at')
    return render(request, 'winners.html', {'winners': winners})

def resources(request):
    return render(request, 'resources.html')

def share_story(request):
    return render(request, 'share_story.html')

def apply(request):
    return render(request, 'apply.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Send email
            try:
                send_mail(
                    subject=f"Contact Form: {form.cleaned_data['subject']}",
                    message=f"From: {form.cleaned_data['name']} <{form.cleaned_data['email']}>\n\n{form.cleaned_data['message']}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.DEFAULT_FROM_EMAIL],
                    fail_silently=False,
                )
                messages.success(request, 'Thank you! Your message has been sent successfully.')
                return redirect('contact')
            except Exception as e:
                messages.error(request, 'Sorry, there was an error sending your message. Please try again.')
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})

def donate(request):
    return render(request, 'donate.html')

def privacy(request):
    return render(request, 'privacy.html')

def terms(request):
    return render(request, 'terms.html')

def faq(request):
    return render(request, 'faq.html')

def stories_list(request):
    stories = Story.objects.filter(is_approved=True).order_by('-created_at')
    return render(request, 'stories_list.html', {'stories': stories})

def story_detail(request, pk):
    story = Story.objects.get(pk=pk, is_approved=True)
    return render(request, 'story_detail.html', {'story': story})
