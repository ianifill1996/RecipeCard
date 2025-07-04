import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchByName } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query');
  const { data, loading, error } = useFetch(fetchByName(query));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data.meals) return <p>No results found for "{query}"</p>;

  return (
    <div>
      {data.meals.map(meal => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default SearchResults;
