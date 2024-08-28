# CookBook_SFF4


ТЗ 
Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.
Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать в клиенте и в API.
Где отображать документацию API — решать вам.
У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, а из категории — на любой рецепт этой категории.

Django и Django Rest Framework:
    pip install django djangorestframework django-cors-headers drf-yasg
    
Создать новый проект:
    django-admin startproject recipe_project
    cd cookbook
    
Создать новое приложение для рецептов:
    python manage.py startapp recipes

Запустить сервер Django:
    python manage.py runserver

Создай новое приложение React:
    npx create-react-app recipe-client
    cd cookbook_app

Установка Axios для работы с API:
    npm install axios
    

Общая структура проекта

1. **Бэкенд**:
- Django Rest Framework для создания API.
- Автодокументация с использованием OpenAPI + Swagger.
- SQLite в качестве базы данных (по умолчанию).

2. **Фронтенд**:
- React для создания пользовательского интерфейса.
- react-router для управления навигацией между страницами.
- Возможность просмотра категорий и конкретных рецептов.

Запуск сервера:
cd recipe_project
cd .\recipe-client\ 
node server.js  

Запуск проекта:
cd recipe_project
python manage.py runserver

Запуск приложения:
cd recipe_project
cd .\recipe-client\ 
npm start


Просмотреть проект по адресу http://localhost:8000/.
Сервер запущен на http://localhost:5000
Приложение:  http://localhost:3000

