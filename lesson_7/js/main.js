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
const sortedUsers = users.sort((a, b) => a.id - b.id);
