const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const categories = [
    { id: 1, name: 'Завтрак', recipes: [...] },
    { id: 2, name: 'Ужин', recipes: [...] },
    { id: 3, name: 'Обед', recipes: [...] },
];

app.get('/api/categories', (req, res) => {
    res.json(categories);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});