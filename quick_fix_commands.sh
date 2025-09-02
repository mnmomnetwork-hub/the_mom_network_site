#!/bin/bash

echo "=== Django Website Update Fix ==="
echo ""

echo "1. Stopping any running Django server..."
# Kill any existing Django processes (optional)
# pkill -f "python manage.py runserver" 2>/dev/null || true

echo "2. Collecting static files..."
python manage.py collectstatic --noinput

echo "3. Starting Django server..."
echo "Open http://localhost:8000 in your browser"
echo "Press Ctrl+Shift+R to hard refresh and clear cache"
echo ""

python manage.py runserver
