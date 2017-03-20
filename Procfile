web: export PATH=/app/.heroku/node/bin:$PATH

web: python ./manage.py collectstatic --noinput; bin/gunicorn_django --workers=4 --bind=0.0.0.0:$PORT ./settings.py
web: ./manage.py runserver 0.0.0.0:$PORT
