const categories = document.querySelector('ul#categories').querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  console.log(
    `Category: ${category.querySelector('h2').textContent} \nElements: ${
      category.querySelectorAll('li').length
    }`
  );
});
