const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Данные категорий с рецептами
const categories = [
    { id: 1, name: 'Завтрак', recipes: ['Яичница', 'Омлет'] },
    { id: 2, name: 'Ужин', recipes: ['Паста', 'Стейк'] },
    { id: 3, name: 'Обед', recipes: ['Салат', 'Суп'] },
];

app.get('/', (req, res) => {
    res.send('Добро пожаловать на мой сервер!');
});

app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Новая поддержка получения категории по ID
app.get('/api/categories/:id', (req, res) => {
    const { id } = req.params;
    const category = categories.find(cat => cat.id === parseInt(id));

    if (category) {
        res.json({
            categoryName: category.name,
            recipes: category.recipes.map(recipe => ({ title: recipe })) // Форматируем рецепты как объекты
        });
    } else {
        res.status(404).json({ error: 'Категория не найдена' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});