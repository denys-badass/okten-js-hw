'use strict';

// Task 9.1
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const body = document.body;
const firstWrapper = document.createElement('div');
firstWrapper.classList.add('wrap', 'collapse', 'alpha', 'beta');
firstWrapper.style.background = 'cyan';
firstWrapper.style.color = 'gray';
firstWrapper.style.fontSize = '18px';

body.appendChild(firstWrapper);

const secondWrapper = firstWrapper.cloneNode(true);

body.appendChild(secondWrapper);
