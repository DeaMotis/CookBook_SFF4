import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await fetch(`/api/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Не удалось загрузить данные рецепта');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipeData();
    }, [id]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!recipe) {
        return <p>Рецепт не найден.</p>;
    }

    return (
        <div className="recipe-container">
            <h1 className="recipe-title">{recipe.title}</h1>
            <div className="ingredients">
                <h2 className="ingredients-title">Ингредиенты:</h2>
                <ul>
                    {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={ingredient.id || index} className="ingredient-item">
                                {ingredient.name || ingredient}
                            </li>
                        ))
                    ) : (
                        <p>Нет ингредиентов.</p>
                    )}
                </ul>
            </div>
            <div className="instructions">
                <h2 className="instructions-title">Инструкция:</h2>
                <p className="instruction-item">{recipe.instructions || 'Нет инструкции'}</p>
            </div>
            <a href="/" className="back-button">Назад</a>
        </div>
    );
};

export default Recipe;