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
