# Comandos
- docker run --rm -v ${PWD}:/app python:3.9-slim sh -c "cd /app && pip install django && django-admin startproject core ."

- docker-compose run backend python manage.py startapp users