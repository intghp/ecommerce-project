# Comandos
- docker run --rm -v ${PWD}:/app python:3.9-slim sh -c "cd /app && pip install django && django-admin startproject core ."

- docker-compose run backend python manage.py startapp users

- npx create-react-app

- npm install axios react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material

- python -c "import secrets; print(secrets.token_urlsafe(50))"

- docker-compose up --build

- docker-compose exec backend python manage.py makemigrations

- docker-compose exec backend python manage.py migrate

- docker-compose exec backend python manage.py createsuperuser