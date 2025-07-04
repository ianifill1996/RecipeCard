import useFetch from '../hooks/useFetch';
import { fetchCategories } from '../api/mealdb';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { Link } from 'react-router-dom';

function Home() {
  const { data, loading, error } = useFetch(fetchCategories());

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      {data.categories.map(cat => (
        <Link key={cat.idCategory} to={`/category/${cat.strCategory}`}>
          <h3>{cat.strCategory}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Home;