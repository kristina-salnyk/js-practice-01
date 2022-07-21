const categories = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

const getCategoryMessage = categoryRef =>
  `Category: ${categoryRef.querySelector('h2').textContent}\nElements: ${
    categoryRef.querySelectorAll('li').length
  }`;

categories.forEach(categoryRef => {
  console.log(getCategoryMessage(categoryRef));
});
