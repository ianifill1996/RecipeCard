const BASE = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = () => `${BASE}/categories.php`;
export const fetchByCategory = category => `${BASE}/filter.php?c=${category}`;
export const fetchById = id => `${BASE}/lookup.php?i=${id}`;
export const fetchByName = name => `${BASE}/search.php?s=${name}`;
