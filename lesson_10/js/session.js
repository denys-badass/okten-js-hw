"use strict";
// Task 10.5
// // Є  сторінка sessionsListPage.html (назва довільна),
// // при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// // Інфу НЕ виводити в консоль, а малювати в DOM
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const sessionUl = document.createElement('ul');
const localSessionsList = JSON.parse(localStorage.getItem('sessionsList') ?? '[]')
    .map((dateStr) => new Date(dateStr));
for (const session of localSessionsList) {
    const sessionItem = document.createElement('li');
    const time = new Date(session);
    sessionItem.innerText = `${time.toString()}`;
    sessionUl.appendChild(sessionItem);
}
document.body.appendChild(sessionUl);
