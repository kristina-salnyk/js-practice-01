const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIndredients = document.querySelector('ul#ingredients');

const listOfItems = ingredients.map(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;

  newItem.setAttribute('class', 'item');

  return newItem;
});

listOfIndredients.append(...listOfItems);
