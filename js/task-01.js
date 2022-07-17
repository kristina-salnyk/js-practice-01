const categories = document.querySelector('ul#categories').querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categoryRef => {
  console.log(
    `Category: ${categoryRef.querySelector('h2').textContent} \nElements: ${
      categoryRef.querySelectorAll('li').length
    }`
  );
});
