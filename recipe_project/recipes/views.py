from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
