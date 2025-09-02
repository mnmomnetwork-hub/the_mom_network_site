#!/bin/bash

echo "🔄 Running Django migrations..."

# Make migrations for all apps
python manage.py makemigrations apps.core
python manage.py makemigrations apps.entries
python manage.py makemigrations apps.stories
python manage.py makemigrations apps.nominations
python manage.py makemigrations apps.donations
python manage.py makemigrations apps.contact
python manage.py makemigrations apps.winners

# Apply all migrations
python manage.py migrate

echo "✅ Migrations complete!"
