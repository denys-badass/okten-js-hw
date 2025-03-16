// Task 10.1
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const hideBtn: HTMLElement = (document.getElementById('hide-btn') as HTMLElement);
const textForHide: HTMLElement = (document.getElementById('text') as HTMLElement);

hideBtn.onclick = function (): void {
    if (textForHide.style.display === 'none') {
        hideBtn.innerText = 'Hide';
        textForHide.style.display = 'block';
    } else {
        hideBtn.innerText = 'Show';
        textForHide.style.display = 'none';
    }
}

// Task 10.2
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
const ageInput: HTMLInputElement = (document.getElementById('age-input') as HTMLInputElement);
const ageCheckBtn: HTMLElement = (document.getElementById('check-age-btn') as HTMLButtonElement);
const result: HTMLElement = (document.getElementById('result') as HTMLElement);

ageCheckBtn.onclick = function (): void {
    const age: number = parseInt(ageInput.value) || 0;
    if (age > 18) {
        result.style.color = '#64a869';
        result.innerText = 'You age greater than 18';
    } else {
        result.style.color = '#912934';
        result.innerText = 'You age less than or equal 18';
    }
}

// Task 10.3
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const cardsDiv: HTMLDivElement = document.getElementById('cards') as HTMLDivElement;
const userInfoForm: HTMLFormElement = document.forms.namedItem('user-info') as HTMLFormElement;
const userName: HTMLInputElement = userInfoForm.elements.namedItem('name') as HTMLInputElement;
const userSurname: HTMLInputElement = userInfoForm.elements.namedItem('surname') as HTMLInputElement;
const userAge: HTMLInputElement = userInfoForm.elements.namedItem('age') as HTMLInputElement;

const userCardCreator = (name: string, surname: string, age: string): HTMLDivElement => {
    const userDiv: HTMLDivElement = document.createElement('div');
    const nameP: HTMLParagraphElement = document.createElement('p');
    const surnameP: HTMLParagraphElement = document.createElement('p');
    const ageP: HTMLParagraphElement = document.createElement('p');
    userDiv.classList.add('user-div');

    nameP.innerHTML = `<strong>Name:</strong> ${name}`;
    surnameP.innerHTML = `<strong>Surname:</strong> ${surname}`;
    ageP.innerHTML = `<strong>Age:</strong> ${age}`;

    userDiv.append(nameP, surnameP, ageP);

    return userDiv;
}

userInfoForm.onsubmit = function (ev: SubmitEvent): void {
    ev.preventDefault();

    cardsDiv.appendChild(userCardCreator(userName.value, userSurname.value, userAge.value));
}

// Task 10.4
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counter: number = JSON.parse(localStorage.getItem('counter') as string) ?? 0;
const counterDiv: HTMLDivElement = document.getElementById('counter') as HTMLDivElement;
counter++;
counterDiv.innerText = `Reloaded: ${counter}`;
localStorage.setItem('counter', JSON.stringify(counter));

// Task 10.5
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
const sessionsList: Date[] = JSON.parse(localStorage.getItem('sessionsList') ?? '[]')
    .map((dateStr: string): Date => new Date(dateStr));
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// Task 10.6
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const kg: HTMLInputElement = document.getElementById('kg') as HTMLInputElement;
const lbs: HTMLInputElement = document.getElementById('lbs') as HTMLInputElement;

kg.oninput = function (): void {
    const kgValue: number = parseFloat(kg.value) || 0;
    lbs.value = JSON.stringify(Math.round(Number(kgValue) * 2.2046226218 * 100) / 100);
}

lbs.oninput = function (): void {
    const lbsValue: number = parseFloat(lbs.value) || 0;
    kg.value = JSON.stringify(Math.round(lbsValue * 0.45359237 * 100) / 100);
}

// Task 10.7
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
const addToLocalStorage = <T>(arrayName: string, objToAdd: T): void => {
    const arr: T[] = JSON.parse(localStorage.getItem(arrayName) as string) ?? [];
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

// Task 10.8
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const tableMakerForm: HTMLFormElement = document.forms.namedItem('table-maker') as HTMLFormElement;
const tableDiv: HTMLDivElement = document.getElementById('table-content') as HTMLDivElement;
tableMakerForm.onsubmit = function (ev: SubmitEvent): void {
    ev.preventDefault();
    const table: HTMLTableElement = document.createElement('table');
    for (let i = 0; i < +tableMakerForm.rows.value; i++) {
        const row: HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < +tableMakerForm.cols.value; j++) {
            const cell:HTMLTableCellElement = document.createElement('td');
            cell.innerText = tableMakerForm.content.value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableDiv.appendChild(table);
}

// Task 10.9
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let moneyCounter: number = JSON.parse(localStorage.getItem('money') ?? '100');
const moneyDiv: HTMLDivElement = document.getElementById('money') as HTMLDivElement;
const sessions: Date[] = JSON.parse(localStorage.getItem('sessionsList') ?? '[]')
    .map((dateStr: string) => new Date(dateStr));
const moneyContent: HTMLParagraphElement = document.createElement('p')

console.log(sessions)
if (sessions.length > 1) {
    const nowSession: number = new Date(sessions[sessions.length - 1]).getTime();
    const lastSession: number = new Date(sessions[sessions.length - 2]).getTime();
    if (nowSession - lastSession >= 10_000) {
        moneyCounter += 10;
    }
}

moneyContent.innerText = `Money: ${moneyCounter} грн`;
moneyDiv.appendChild(moneyContent);
localStorage.setItem('money', JSON.stringify(moneyCounter));
