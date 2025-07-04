import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);

  const addFavorite = id => setFavoriteIds(prev => [...new Set([...prev, id])]);
  const removeFavorite = id => setFavoriteIds(prev => prev.filter(favId => favId !== id));
  const isFavorite = id => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider value={{ favoriteIds, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}