import { Link } from 'react-router-dom';

function RecipeCard({ meal }) {
  return (
    <div>
      <Link to={`/recipe/${meal.idMeal}`}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>{meal.strMeal}</h3>
      </Link>
    </div>
  );
}

export default RecipeCard;