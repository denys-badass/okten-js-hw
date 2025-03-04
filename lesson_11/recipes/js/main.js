'use strict';

const recipeUrl = new URL('https://dummyjson.com/recipes');
recipeUrl.searchParams.set('limit', '0');

fetch(recipeUrl)
    .then(response => response.json())
    .then((data) => {
        localStorage.setItem('numOfRecipes', JSON.stringify(data.total));
    })

console.log(localStorage.getItem('numOfRecipes'));

