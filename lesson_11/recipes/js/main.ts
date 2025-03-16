interface IDetail {
    imgSrc: string;
    imgAlt: string;
    description: string;
    imgClass: string;
    descriptionClass: string;
}

interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

const difficultImages: Record<string, string> = {
    Easy: 'img/easy.png',
    Medium: 'img/medium.png',
    Hard: 'img/hard.png',
}
let pageCounter: number = JSON.parse(localStorage.getItem('pageCounter') ?? '0');
const recipeUrl = new URL('https://dummyjson.com/recipes');
recipeUrl.searchParams.set('limit', '0');

const updateAllRecipes = (): number => {
    return JSON.parse(localStorage.getItem('numOfRecipes') ?? '0');
}

if (!localStorage.getItem('numOfRecipes')) {
    fetch(recipeUrl)
        .then(response => response.json())
        .then((data) => {
            localStorage.setItem('numOfRecipes', JSON.stringify(data.total));
        })
}

let allRecipes: number = updateAllRecipes();

const prevBtn: HTMLButtonElement = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn: HTMLButtonElement = document.getElementById('next-btn') as HTMLButtonElement;

const ratingFiller = (rating: number, review: number): void => {
    const fullRating: number = Math.floor(rating);
    const stars: HTMLElement = document.getElementById('stars') as HTMLElement;
    stars.innerHTML = '';

    for (let i = 0; i < fullRating; i++) {
        const star: HTMLSpanElement = document.createElement('span');
        star.className = 'fa-solid fa-star';
        stars.appendChild(star);
    }
    const difference: number = rating - fullRating;
    if (difference > 0.7) {
        const star: HTMLSpanElement = document.createElement('span');
        star.className = 'fa-solid fa-star';
        stars.appendChild(star);
    } else if (difference > 0.3) {
        const halfStar: HTMLSpanElement = document.createElement('span');
        halfStar.className = 'fa-solid fa-star-half-stroke';
        stars.appendChild(halfStar);
    } else {
        const halfStar: HTMLSpanElement = document.createElement('span');
        halfStar.className = 'fa-regular fa-star';
        stars.appendChild(halfStar);
    }

    const views: HTMLElement = document.getElementById('reviews') as HTMLElement;
    views.innerHTML = `${rating} (<span class="fa-solid fa-eye"></span> ${review})`;
}

const detailsFiller = (details: Map<string, IDetail>): void => {
    for (const detail of details.values()) {
        const img: HTMLImageElement = document.getElementById(detail.imgClass) as HTMLImageElement;
        const desc: HTMLElement = document.getElementById(detail.descriptionClass) as HTMLElement;
        img.src = detail.imgSrc;
        img.alt = detail.imgAlt;
        desc.innerHTML = detail.description;
    }
}

const badgeFiller = (id: number): void => {
    const idBadge: HTMLElement = document.getElementById('badge') as HTMLElement;
    idBadge.innerText = `#${id}`;
}

const categoryFiller = (categories: string[]) => {
    const categoryDiv: HTMLElement = document.getElementById('categories') as HTMLElement;
    categoryDiv.innerHTML = '';

    for (const category of categories) {
        const categoryItem: HTMLLIElement = document.createElement('li');
        categoryItem.innerText = category;
        categoryDiv.appendChild(categoryItem);
    }
}

const titleFiller = (name: string): void => {
    const recipeTitle: HTMLElement = document.getElementById('recipe-title') as HTMLElement;
    recipeTitle.innerText = name;
}

const tagFiller = (tags: string[]): void => {
    const tagsDiv: HTMLElement = document.getElementById('tags') as HTMLElement;
    tagsDiv.innerHTML = '';

    for (const tag of tags) {
        const tagP: HTMLParagraphElement = document.createElement('p');
        tagP.innerText = `#${tag}`;
        tagsDiv.appendChild(tagP);
    }
}

const imgFiller = (image: string): void => {
    const img: HTMLImageElement = document.getElementById('recipe-img') as HTMLImageElement;
    img.src = image;
    img.addEventListener('error', (e) => {
        const target: HTMLImageElement = e.target as HTMLImageElement;
        target.src = 'img/product-placeholder.jpg';
        target.onerror = null;
    })
}

const ingredientFiller = (ingredients: string[]): void => {
    const ingredientList: HTMLElement = document.getElementById('ingredients') as HTMLElement;
    ingredientList.innerHTML = '';

    for (const ingredient of ingredients) {
        const ingredientItem: HTMLLIElement = document.createElement('li');
        ingredientItem.innerText = ingredient;
        ingredientList.appendChild(ingredientItem);
    }
}

const instructionFiller = (instructions: string[]): void => {
    const instructionList: HTMLElement = document.getElementById('instructions') as HTMLElement;
    instructionList.innerHTML = '';

    for (const item of instructions) {
        const instructionItem: HTMLLIElement = document.createElement('li');
        instructionItem.innerText = item;
        instructionList.appendChild(instructionItem);
    }
}

const showRecipe = (recipe: IRecipe): void => {
    const {
        id,
        name,
        ingredients,
        instructions,
        prepTimeMinutes,
        cookTimeMinutes,
        servings,
        difficulty,
        cuisine,
        caloriesPerServing,
        tags,
        image,
        rating,
        reviewCount,
        mealType,
    } = recipe;

    const details: Map<string, IDetail> = new Map([
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
}

const recipeFetch = (url: URL): void => {
    localStorage.setItem('pageCounter', JSON.stringify(pageCounter));
    recipeUrl.searchParams.set('skip', JSON.stringify(pageCounter));
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            showRecipe(data.recipes[0]);
        })
}


recipeUrl.searchParams.set('limit', '1');
recipeFetch(recipeUrl);

prevBtn.addEventListener('click', () => {
    pageCounter -= pageCounter > 0 ? 1 : 0;
    recipeFetch(recipeUrl);
})

nextBtn.addEventListener('click', () => {
    allRecipes = updateAllRecipes();
    pageCounter += pageCounter < (allRecipes - 1) ? 1 : 0;
    recipeFetch(recipeUrl);
})
