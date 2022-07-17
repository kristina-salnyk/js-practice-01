const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('ul#ingredients');

const items = ingredients.map(ingredient => {
  const newItemRef = document.createElement('li');
  newItemRef.textContent = ingredient;

  newItemRef.classList.add('item');

  return newItemRef;
});

ingredientsRef.append(...items);
