import { useFavorites } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';
import { fetchById } from '../api/mealdb';
import RecipeCard from '../components/RecipeCard';

function Favorites() {
  const { favoriteIds } = useFavorites();

  if (favoriteIds.length === 0) {
    return <p>No favorites yet. Go add some!</p>;
  }

  return (
    <div>
      {favoriteIds.map(id => {
        const { data, loading } = useFetch(fetchById(id));
        return data ? <RecipeCard key={id} meal={data.meals[0]} /> : null;
      })}
    </div>
  );
}

export default Favorites;