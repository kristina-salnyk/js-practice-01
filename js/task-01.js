const categories = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

const getCategoryMessage = categoryItemRef =>
  `Category: ${categoryItemRef.querySelector('h2').textContent}\nElements: ${
    categoryItemRef.querySelectorAll('li').length
  }`;

categories.forEach(categoryItemRef => {
  console.log(getCategoryMessage(categoryItemRef));
});
