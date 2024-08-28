import django.db


class Category(django.db.models.Model):
    name = django.db.models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Recipe(django.db.models.Model):
    title = django.db.models.CharField(max_length=200)
    description = django.db.models.TextField()
    category = django.db.models.ForeignKey(Category, related_name='recipes', on_delete=django.db.models.CASCADE)

    def __str__(self):
        return self.title
