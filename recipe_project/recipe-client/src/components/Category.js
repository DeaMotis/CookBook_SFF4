import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Category() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchCategoryData = async () => {
      const response = await fetch(`/api/categories/${id}`);
      const data = await response.json();
      setRecipes(data.recipes);
      setCategoryName(data.categoryName);
    };

    fetchCategoryData();
  }, [id]);

  return (
    <div>
      <h1>{categoryName} Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Category;