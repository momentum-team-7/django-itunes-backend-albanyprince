from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html', {})
    # Was having troule with line 5. I was receiving a error due incorrectly calling the location of the html file( via a comment from Mike on Slack. Finally got it to work.😄)