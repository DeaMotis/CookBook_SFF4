import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // Подключение CSS файла

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data);
            } catch (err) {
                setError('Не удалось загрузить категории.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Загрузка...</p>; // Отображение состояния загрузки
    }

    if (error) {
        return <p>{error}</p>; // Отображение сообщения об ошибке
    }

    return (
        <div className="home">
            {categories.length > 0 ? (
                categories.map(category => (
                    <div key={category.id} className="category-card">
                        <h2>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </h2>
                        <ul>
                            {Array.isArray(category.recipes) && category.recipes.length > 0 ? (
                                category.recipes.map(recipe => (
                                    <li key={recipe.id} className="recipe-card">
                                        <Link to={`/recipe/${recipe.id}`}>
                                            <h3>{recipe.title}</h3>
                                        </Link>
                                        <p>Ингредиенты: {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : 'Нет ингредиентов'}</p>
                                        <p>Инструкция: {recipe.instructions || 'Нет инструкции'}</p>
                                    </li>
                                ))
                            ) : (
                                <p>Рецепты не найдены.</p> // Сообщение, если нет рецептов в категории
                            )}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Категории не найдены.</p>
            )}
        </div>
    );
};

export default Home;