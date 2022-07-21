const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('ul#ingredients');

const createIngredientItem = ingredient => {
  const newItemRef = document.createElement('li');
  newItemRef.textContent = ingredient;

  newItemRef.classList.add('item');

  return newItemRef;
};

const ingredientItems = ingredients.map(ingredient => createIngredientItem(ingredient));

ingredientsRef.append(...ingredientItems);
