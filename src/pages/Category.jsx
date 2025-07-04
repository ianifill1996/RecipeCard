import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchByCategory } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

function Category() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(fetchByCategory(categoryName));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      {data.meals.map(meal => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default Category;