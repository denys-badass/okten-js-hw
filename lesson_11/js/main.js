'use strict';

// Task 11.1
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const cartsURL = 'https://dummyjson.com/carts';
const usersURL = 'https://dummyjson.com/users';

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('carts', JSON.stringify(data.total));
    })

const accordionFlushDiv = document.getElementById('accordionFlush');

const imgBlockCreator = (url, alt) => {
    const imgBlock = document.createElement('div');
    imgBlock.classList.add('img-block');
    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    imgBlock.appendChild(img);
    
    return imgBlock;
}

const prePCreator = (preWord) => {
    return `<span class="pre-p">${preWord}</span>`;
}

const subBlockCreator = (className, subTag, tagContent) => {
    const block = document.createElement('div');
    block.classList.add(className);
    const tag = document.createElement(subTag);
    tag.innerHTML = tagContent;
    block.appendChild(tag);
    
    return block;
}

const productCreator = (product) => {
    const {title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} = product
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('product');
    const imgBlock = imgBlockCreator(thumbnail, title);
    const titleBlock = subBlockCreator('title', 'h2', title);
    const priceBlock = subBlockCreator('price',
        'p',
        `${prePCreator('Price:')} ${price}`
    );
    const quantityBlock = subBlockCreator('quantity',
        'p',
        `${prePCreator('Qty')} ${quantity}`
    );
    const discountBlock = subBlockCreator('discount', 'p', discountPercentage);
    const totalWithoutBlock = subBlockCreator('total-without', 'p', total);
    const totalBlock = subBlockCreator('total', 'p', discountedTotal);
    
    cartDiv.append(imgBlock, titleBlock, priceBlock, quantityBlock, discountBlock, totalWithoutBlock, totalBlock);
    
    return cartDiv;
}



