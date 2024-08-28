import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(`/api/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [id]);

  // индикатор загрузки
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Если данных нет, показываем сообщение об отсутствии рецепта
  if (!recipe) {
    return <div>Рецепт не найден</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h2>{recipe.category}</h2>
      <p>{recipe.description}</p>
      <h3>Ингредиенты:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Инструкция:</h3>
      <p>{recipe.instructions}</p>
      <Link to={`/category/${recipe.categoryId}`}>Назад в категорию</Link>
    </div>
  );
}

export default Recipe;