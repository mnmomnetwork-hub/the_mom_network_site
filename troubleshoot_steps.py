"""
Django Website Update Troubleshooting Steps
==========================================

If your website changes aren't showing up, follow these steps:
"""

# Step 1: Stop and restart your Django server
print("1. RESTART DJANGO SERVER:")
print("   - Press Ctrl+C to stop the current server")
print("   - Run: python manage.py runserver")
print("   - Open: http://localhost:8000")
print()

# Step 2: Collect static files (important for CSS changes)
print("2. COLLECT STATIC FILES:")
print("   python manage.py collectstatic --noinput")
print()

# Step 3: Clear browser cache
print("3. CLEAR BROWSER CACHE:")
print("   - Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)")
print("   - Or open browser in incognito/private mode")
print()

# Step 4: Check if files are in the right location
print("4. VERIFY FILE STRUCTURE:")
print("   Your project should look like this:")
print("   momnetwork/")
print("   ├── momnetwork/")
print("   │   ├── templates/")
print("   │   │   └── home.html")
print("   │   └── static/")
print("   │       └── css/")
print("   │           └── styles.css")
print("   ├── apps/")
print("   └── manage.py")
print()

# Step 5: Check Django settings
print("5. VERIFY DJANGO SETTINGS:")
print("   Make sure these are in your settings.py:")
print("   - STATICFILES_DIRS = [BASE_DIR / 'momnetwork' / 'static']")
print("   - TEMPLATES 'DIRS': [BASE_DIR / 'momnetwork' / 'templates']")
