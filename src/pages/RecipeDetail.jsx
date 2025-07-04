import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchById } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { useFavorites } from '../context/FavoritesContext';

function RecipeDetail() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(fetchById(recipeId));
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  const recipe = data.meals[0];
  const toggleFavorite = () => {
    isFavorite(recipe.idMeal) ? removeFavorite(recipe.idMeal) : addFavorite(recipe.idMeal);
  };

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <button onClick={toggleFavorite}>
        {isFavorite(recipe.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;
