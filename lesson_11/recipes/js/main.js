"use strict";
const difficultImages = {
    Easy: 'img/easy.png',
    Medium: 'img/medium.png',
    Hard: 'img/hard.png',
};
let pageCounter = JSON.parse(localStorage.getItem('pageCounter') ?? '0');
const recipeUrl = new URL('https://dummyjson.com/recipes');
recipeUrl.searchParams.set('limit', '0');
const updateAllRecipes = () => {
    return JSON.parse(localStorage.getItem('numOfRecipes') ?? '0');
};
if (!localStorage.getItem('numOfRecipes')) {
    fetch(recipeUrl)
        .then(response => response.json())
        .then((data) => {
        localStorage.setItem('numOfRecipes', JSON.stringify(data.total));
    });
}
let allRecipes = updateAllRecipes();
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const ratingFiller = (rating, review) => {
    const fullRating = Math.floor(rating);
    const stars = document.getElementById('stars');
    stars.innerHTML = '';
    for (let i = 0; i < fullRating; i++) {
        const star = document.createElement('span');
        star.className = 'fa-solid fa-star';
        stars.appendChild(star);
    }
    const difference = rating - fullRating;
    if (difference > 0.7) {
        const star = document.createElement('span');
        star.className = 'fa-solid fa-star';
        stars.appendChild(star);
    }
    else if (difference > 0.3) {
        const halfStar = document.createElement('span');
        halfStar.className = 'fa-solid fa-star-half-stroke';
        stars.appendChild(halfStar);
    }
    else {
        const halfStar = document.createElement('span');
        halfStar.className = 'fa-regular fa-star';
        stars.appendChild(halfStar);
    }
    const views = document.getElementById('reviews');
    views.innerHTML = `${rating} (<span class="fa-solid fa-eye"></span> ${review})`;
};
const detailsFiller = (details) => {
    for (const detail of details.values()) {
        const img = document.getElementById(detail.imgClass);
        const desc = document.getElementById(detail.descriptionClass);
        img.src = detail.imgSrc;
        img.alt = detail.imgAlt;
        desc.innerHTML = detail.description;
    }
};
const badgeFiller = (id) => {
    const idBadge = document.getElementById('badge');
    idBadge.innerText = `#${id}`;
};
const categoryFiller = (categories) => {
    const categoryDiv = document.getElementById('categories');
    categoryDiv.innerHTML = '';
    for (const category of categories) {
        const categoryItem = document.createElement('li');
        categoryItem.innerText = category;
        categoryDiv.appendChild(categoryItem);
    }
};
const titleFiller = (name) => {
    const recipeTitle = document.getElementById('recipe-title');
    recipeTitle.innerText = name;
};
const tagFiller = (tags) => {
    const tagsDiv = document.getElementById('tags');
    tagsDiv.innerHTML = '';
    for (const tag of tags) {
        const tagP = document.createElement('p');
        tagP.innerText = `#${tag}`;
        tagsDiv.appendChild(tagP);
    }
};
const imgFiller = (image) => {
    const img = document.getElementById('recipe-img');
    img.src = image;
    img.addEventListener('error', (e) => {
        const target = e.target;
        target.src = 'img/product-placeholder.jpg';
        target.onerror = null;
    });
};
const ingredientFiller = (ingredients) => {
    const ingredientList = document.getElementById('ingredients');
    ingredientList.innerHTML = '';
    for (const ingredient of ingredients) {
        const ingredientItem = document.createElement('li');
        ingredientItem.innerText = ingredient;
        ingredientList.appendChild(ingredientItem);
    }
};
const instructionFiller = (instructions) => {
    const instructionList = document.getElementById('instructions');
    instructionList.innerHTML = '';
    for (const item of instructions) {
        const instructionItem = document.createElement('li');
        instructionItem.innerText = item;
        instructionList.appendChild(instructionItem);
    }
};
const showRecipe = (recipe) => {
    const { id, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, tags, image, rating, reviewCount, mealType, } = recipe;
    const details = new Map([
        ['prepTime', {
                imgSrc: 'img/prep-time.png',
                imgAlt: 'prep time',
                description: `${prepTimeMinutes} minutes`,
                imgClass: 'prep-time-img',
                descriptionClass: 'prep-time-desc'
            }],
        ['cookTime', {
                imgSrc: 'img/cook-time.png',
                imgAlt: 'cook time',
                description: `${cookTimeMinutes} minutes`,
                imgClass: 'cook-time-img',
                descriptionClass: 'cook-time-desc'
            }],
        ['servings', {
                imgSrc: 'img/serving.png',
                imgAlt: 'servings',
                description: String(servings),
                imgClass: 'servings-img',
                descriptionClass: 'servings-desc'
            }],
        ['difficulty', {
                imgSrc: difficultImages[difficulty] ?? 'img/product-placeholder.jpg',
                imgAlt: String(difficulty),
                description: String(difficulty),
                imgClass: 'difficult-img',
                descriptionClass: 'difficult-desc'
            }],
        ['cuisine', {
                imgSrc: 'img/cuisine.png',
                imgAlt: 'cuisine',
                description: String(cuisine),
                imgClass: 'cuisines-img',
                descriptionClass: 'cuisines-desc'
            }],
        ['calories', {
                imgSrc: 'img/calories.png',
                imgAlt: 'calories',
                description: String(caloriesPerServing),
                imgClass: 'calories-img',
                descriptionClass: 'calories-desc'
            }],
    ]);
    badgeFiller(id);
    categoryFiller(mealType);
    titleFiller(name);
    tagFiller(tags);
    ratingFiller(rating, reviewCount);
    imgFiller(image);
    detailsFiller(details);
    ingredientFiller(ingredients);
    instructionFiller(instructions);
};
const recipeFetch = (url) => {
    localStorage.setItem('pageCounter', JSON.stringify(pageCounter));
    recipeUrl.searchParams.set('skip', JSON.stringify(pageCounter));
    fetch(url)
        .then(response => response.json())
        .then((data) => {
        showRecipe(data.recipes[0]);
    });
};
recipeUrl.searchParams.set('limit', '1');
recipeFetch(recipeUrl);
prevBtn.addEventListener('click', () => {
    pageCounter -= pageCounter > 0 ? 1 : 0;
    recipeFetch(recipeUrl);
});
nextBtn.addEventListener('click', () => {
    allRecipes = updateAllRecipes();
    pageCounter += pageCounter < (allRecipes - 1) ? 1 : 0;
    recipeFetch(recipeUrl);
});
