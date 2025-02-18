'use strict';

// Task 7.1
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

function* idGen(num) {
    for (let i = 1; i <= num; i++) {
        yield i;
    }
}

const id = idGen(Number.MAX_SAFE_INTEGER);

const users = [];
users.push(new User(id.next().value, 'John', 'Smith', 'john.smith@example.com', '+1-555-1234'));
users.push(new User(id.next().value, 'Emma', 'Johnson', 'emma.johnson@example.com', '+1-555-5678'));
users.push(new User(id.next().value, 'Michael', 'Brown', 'michael.brown@example.com', '+1-555-9101'));
users.push(new User(id.next().value, 'Sophia', 'Wilson', 'sophia.wilson@example.com', '+1-555-1123'));
users.push(new User(id.next().value, 'Daniel', 'Taylor', 'daniel.taylor@example.com', '+1-555-3141'));
users.push(new User(id.next().value, 'Olivia', 'Martinez', 'olivia.martinez@example.com', '+1-555-5161'));
users.push(new User(id.next().value, 'William', 'Anderson', 'william.anderson@example.com', '+1-555-7181'));
users.push(new User(id.next().value, 'Ava', 'Thomas', 'ava.thomas@example.com', '+1-555-9202'));
users.push(new User(id.next().value, 'James', 'Hernandez', 'james.hernandez@example.com', '+1-555-1223'));
users.push(new User(id.next().value, 'Isabella', 'Moore', 'isabella.moore@example.com', '+1-555-3243'));

// Task 7.2
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsers = users.filter((user) => user.id % 2 === 0);

// Task 7.3
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a, b) => a.id - b.id);

// Task 7.4
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [];
clients.push(new Client(id.next().value, 'Liam', 'Brown', 'liam.brown@example.com', '+1-555-1111', ['Laptop', 'Mouse']));
clients.push(new Client(id.next().value, 'Emma', 'Smith', 'emma.smith@example.com', '+1-555-2222', ['Phone', 'Headphones']));
clients.push(new Client(id.next().value, 'Noah', 'Johnson', 'noah.johnson@example.com', '+1-555-3333', ['Tablet', 'Smartwatch']));
clients.push(new Client(id.next().value, 'Olivia', 'Williams', 'olivia.williams@example.com', '+1-555-4444', ['Monitor', 'Keyboard']));
clients.push(new Client(id.next().value, 'William', 'Jones', 'william.jones@example.com', '+1-555-5555', ['Desk Chair']));
clients.push(new Client(id.next().value, 'Sophia', 'Garcia', 'sophia.garcia@example.com', '+1-555-6666', ['Camera', 'Tripod', 'SD Card']));
clients.push(new Client(id.next().value, 'James', 'Miller', 'james.miller@example.com', '+1-555-7777', ['Gaming Console', 'Game Controller']));
clients.push(new Client(id.next().value, 'Isabella', 'Davis', 'isabella.davis@example.com', '+1-555-8888', ['Speakers', 'Microphone']));
clients.push(new Client(id.next().value, 'Benjamin', 'Rodriguez', 'benjamin.rodriguez@example.com', '+1-555-9999', ['E-Reader']));
clients.push(new Client(id.next().value, 'Mia', 'Martinez', 'mia.martinez@example.com', '+1-555-1010', ['Vacuum Cleaner', 'Air Purifier']));

// Task 7.5
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);

// Task 7.6
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, releaseYear, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.releaseYear = releaseYear;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
// }
//
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// };
//
// Car.prototype.info = function () {
//     for (const [key, value] of Object.entries(this)) {
//         console.log(`${key} - ${JSON.stringify(value)}`);
//     }
// };
//
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
// };
//
// Car.prototype.changeYear = function (newValue) {
//     this.releaseYear = newValue;
// };
//
// Car.prototype.addDriver = function (driver) {
//     this.driver = driver;
// };

// Task 7.7
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, releaseYear, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.releaseYear = releaseYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    
    info() {
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key} - ${JSON.stringify(value)}`);
        }
    }
    
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    
    changeYear(newValue) {
        this.releaseYear = newValue;
    }
    
    addDrive(driver) {
        this.driver = driver;
    }
}

// Task 7.8
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Shoe {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [];
cinderellas.push(new Cinderella('Ella', 19, 36));
cinderellas.push(new Cinderella('Sophie', 21, 37));
cinderellas.push(new Cinderella('Isabella', 18, 35));
cinderellas.push(new Cinderella('Lily', 20, 36));
cinderellas.push(new Cinderella('Charlotte', 22, 38));
cinderellas.push(new Cinderella('Amelia', 19, 37));
cinderellas.push(new Cinderella('Grace', 23, 39));
cinderellas.push(new Cinderella('Grace', 23, 39));
cinderellas.push(new Cinderella('Emma', 20, 35));
cinderellas.push(new Cinderella('Olivia', 21, 36));
cinderellas.push(new Cinderella('Ava', 18, 34));

const randomSize = Math.floor(Math.random() * 6) + 34;

const cinderellasShoe = new Shoe('red', randomSize);
const prince = new Prince('Elvis', 25, cinderellasShoe);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe.size) {
        console.log(cinderella);
        break;
    }
}

const targetCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoe.size);
