# 🌟 The Mom Network - Complete Django Project

A comprehensive Django-based community platform that pools weekly donations to support parents and caregivers across the United States.

## 🚀 **Quick Setup for GitHub Codespaces**

### **Step 1: Create Repository**
1. Create a new repository on GitHub
2. Upload all these files to your repository
3. Open in Codespaces (Green "Code" button → "Codespaces" → "Create codespace")

### **Step 2: Install & Setup**
\`\`\`bash
# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Set up database
python manage.py makemigrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic --noinput

# Run the server
python manage.py runserver
\`\`\`

### **Step 3: Access Your Site**
- Codespaces will show a popup: "Your application running on port 8000 is available"
- Click "Open in Browser" or use the Ports tab
- **Your website is now live!** 🎉

## 🌐 **Key Features**

✅ **Complete Website** - All pages functional  
✅ **Admin Interface** - Manage everything at `/admin/`  
✅ **REST APIs** - Full API endpoints  
✅ **Stripe Integration** - Payment processing ready  
✅ **Email System** - Contact forms and notifications  
✅ **Responsive Design** - Mobile-friendly  
✅ **Form Handling** - All forms work  
✅ **Database Models** - Complete data structure  
✅ **Updated Content** - No Minnesota references, inclusive language  

## 📱 **Pages Included**

- **Homepage** (`/`) - Hero section, recent winners, featured stories
- **Mission** (`/mission/`) - About our mission and values
- **Who We Help** (`/who-we-help/`) - Information about eligible families
- **Apply** (`/apply/`) - Application form for families needing help
- **Donate** (`/donate/`) - Donation form with Stripe integration
- **Winners** (`/winners/`) - Weekly winners showcase
- **Resources** (`/resources/`) - Additional support resources
- **Share Story** (`/share-story/`) - Community story submission
- **Videos** (`/videos/`) - Community videos and testimonials
- **Contact** (`/contact/`) - Contact form
- **FAQ** (`/faq/`) - Frequently asked questions
- **Privacy** (`/privacy/`) - Privacy policy
- **Terms** (`/terms/`) - Terms of service

## 🔧 **Configuration**

### **Environment Variables**
Edit `.env` file:
\`\`\`env
DJANGO_SECRET_KEY=your-secret-key-here
STRIPE_SECRET_KEY=sk_test_your_stripe_key
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
\`\`\`

### **Stripe Setup (Optional)**
1. Get keys from [stripe.com](https://stripe.com)
2. Add to `.env` file
3. Update publishable key in `donate.html`

## 📊 **Admin Features**

Access `/admin/` to manage:
- **Applications** - Review and approve help requests
- **Donations** - Track all donations and payments
- **Stories** - Moderate community stories
- **Winners** - Manage weekly winners
- **Contact Messages** - Respond to inquiries
- **Site Settings** - Configure site-wide settings

## 🛠 **Management Commands**

\`\`\`bash
# Select a weekly winner randomly
python manage.py select_weekly_winner

# Reset weekly entries (use with caution)
python manage.py reset_weekly_entries --confirm
\`\`\`

## 🗂 **Project Structure**

\`\`\`
momnetwork/
├── manage.py
├── momnetwork/
│   ├── settings.py          # Django settings
│   ├── urls.py             # Main URL configuration
│   ├── templates/          # HTML templates
│   └── static/            # CSS, JS, images
├── apps/
│   ├── core/              # Main pages and functionality
│   ├── entries/           # Application system
│   ├── stories/           # Story sharing
│   ├── nominations/       # Family nominations
│   ├── donations/         # Stripe integration
│   ├── contact/           # Contact forms
│   └── winners/           # Weekly winners
└── requirements.txt       # Python dependencies
\`\`\`

## 🚀 **Deployment Options**

### **Heroku**
\`\`\`bash
# Install Heroku CLI, then:
heroku create your-app-name
heroku addons:create heroku-postgresql:mini
git push heroku main
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
\`\`\`

### **Railway**
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### **DigitalOcean App Platform**
1. Create app from GitHub
2. Configure environment variables
3. Deploy with auto-scaling

## 🔒 **Security Features**

- CSRF protection enabled
- Secure payment processing with Stripe
- Environment-based configuration
- SQL injection protection
- XSS protection
- Secure password validation

## 📧 **Email Configuration**

For production, configure email settings:
\`\`\`env
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
EMAIL_USE_TLS=true
\`\`\`

## 🎯 **Next Steps After Setup**

1. **Add Stripe Keys** - Enable donation processing
2. **Configure Email** - Set up email notifications
3. **Customize Design** - Update colors, fonts, images
4. **Add Content** - Create initial stories and winners
5. **Test Everything** - Try all forms and features
6. **Deploy** - Launch to production

## 📞 **Support**

- **Email**: MNMomNetwork@gmail.com
- **Issues**: Create GitHub issue
- **Documentation**: Check Django docs

## 📄 **License**

This project is open source and available under the MIT License.

---

**🎉 Your complete Mom Network website is ready to help families across the United States!**
\`\`\`

```shellscript file="setup.sh"
#!/bin/bash

echo "🚀 Setting up The Mom Network Django Project..."
echo "=============================================="

# Check if Python is installed
if ! command -v python &> /dev/null; then
    echo "❌ Python is not installed. Please install Python 3.8+ first."
    exit 1
fi

echo "✅ Python found"

# Install requirements
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "⚙️ Creating .env file..."
    cp .env.example .env
    echo "📝 Please edit .env file with your settings if needed"
fi

# Run migrations
echo "🗄️ Setting up database..."
python manage.py makemigrations
python manage.py migrate

# Collect static files
echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser prompt
echo ""
echo "👤 Create a superuser account for admin access? (y/n)"
read -r create_superuser
if [ "$create_superuser" = "y" ]; then
    python manage.py createsuperuser
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "🌟 Next steps:"
echo "1. Edit your .env file with proper settings"
echo "2. Add your Stripe keys for donations (optional)"
echo "3. Run: python manage.py runserver"
echo "4. Visit: http://localhost:8000"
echo ""
echo "🔧 Admin panel: http://localhost:8000/admin/"
echo "💝 Ready to help families across the United States!"
