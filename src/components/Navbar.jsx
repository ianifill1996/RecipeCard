import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?query=${query}`);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search recipes..." />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
