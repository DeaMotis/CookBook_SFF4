import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get(`/api/categories/${id}`);
                setCategory(response.data);
            } catch (error) {
                setError('Не удалось загрузить информацию о категории.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData();
    }, [id]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>{category.name}</h2>
            <ul>
                {Array.isArray(category.recipes) && category.recipes.length > 0 ? (
                    category.recipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    ))
                ) : (
                    <p>Рецепты не найдены.</p>
                )}
            </ul>
        </div>
    );
};

export default Category;