"""
Run this script to check if your Django setup is correct
"""
import os
from pathlib import Path

def check_django_setup():
    print("🔍 Checking Django Project Setup...")
    print("=" * 50)
    
    # Check if we're in the right directory
    if not os.path.exists("manage.py"):
        print("❌ ERROR: manage.py not found!")
        print("   Make sure you're in the Django project root directory")
        return False
    else:
        print("✅ Found manage.py")
    
    # Check templates directory
    templates_dir = Path("momnetwork/templates")
    if templates_dir.exists():
        print("✅ Templates directory exists")
        
        # Check for home.html
        home_template = templates_dir / "home.html"
        if home_template.exists():
            print("✅ home.html template found")
        else:
            print("❌ home.html template missing")
    else:
        print("❌ Templates directory missing")
    
    # Check static directory
    static_dir = Path("momnetwork/static")
    if static_dir.exists():
        print("✅ Static directory exists")
        
        # Check for CSS file
        css_file = static_dir / "css" / "styles.css"
        if css_file.exists():
            print("✅ styles.css found")
        else:
            print("❌ styles.css missing")
    else:
        print("❌ Static directory missing")
    
    # Check settings.py
    settings_file = Path("momnetwork/settings.py")
    if settings_file.exists():
        print("✅ settings.py found")
        
        # Read settings and check key configurations
        with open(settings_file, 'r') as f:
            content = f.read()
            
        if 'STATICFILES_DIRS' in content:
            print("✅ STATICFILES_DIRS configured")
        else:
            print("⚠️  STATICFILES_DIRS might need configuration")
            
        if '"DIRS": [BASE_DIR / "momnetwork" / "templates"]' in content:
            print("✅ TEMPLATES DIRS configured")
        else:
            print("⚠️  TEMPLATES DIRS might need configuration")
    
    print("\n🚀 Next Steps:")
    print("1. Run: python manage.py collectstatic --noinput")
    print("2. Run: python manage.py runserver")
    print("3. Open: http://localhost:8000")
    print("4. Hard refresh browser: Ctrl+Shift+R")

if __name__ == "__main__":
    check_django_setup()
