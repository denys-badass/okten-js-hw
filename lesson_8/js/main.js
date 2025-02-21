'use strict';

// Task 8.1
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
const deepCopy = obj => {
    if (typeof obj !== 'object') {
        if (typeof obj === 'number' && isNaN(obj)) return NaN;
        return obj;
    }
    if (obj instanceof Array) {
        return [...obj.map(item => deepCopy(item))];
    }
    if (obj instanceof Map) {
        return new Map([...obj.entries()].map(([key, value]) => [deepCopy(key), deepCopy(value)]));
    }
    if (obj instanceof Set) {
        return new Set([...obj].map((item) => deepCopy(item)));
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    const copy = Object.create(obj);
    for (const item in obj) {
        copy[item] = typeof obj[item] == 'object' ? deepCopy(obj[item]) : obj[item];
    }
    
    return copy;
}

// Task 8.2
// - є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const coursesWithId = coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value}));
