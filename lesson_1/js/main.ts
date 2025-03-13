// task 1.1
let hello: string = 'hello';
let owu: string = 'owu';
let comString: string = 'com';
let ua: string = 'ua';
let oneNumber: number = 1;
let tenNumber: number = 10;
let negativeNines: number = -999;
let oneTwoThree: number = 123;
let pi: number = 3.14;
let twoAndSeven: number = 2.7;
let sixteen: number = 16;
let trueBool: boolean = true;
let falseBool: boolean = false;

console.log(hello);
console.log(owu);
console.log(comString);
console.log(ua);
console.log(oneNumber);
console.log(tenNumber);
console.log(negativeNines);
console.log(oneTwoThree);
console.log(pi);
console.log(twoAndSeven);
console.log(sixteen);
console.log(trueBool);
console.log(falseBool);

// task 1.2
let firstName: string = 'Denys';
let middleName: string = 'Sergiyovich';
let lastName: string = 'Podobrii';
let person: string = `${lastName} ${firstName} ${middleName}`;

console.log(person);

// task 1.3
let a: number = 100;
let b:string = '100';
let c: boolean = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// task 1.4
firstName = prompt('What is your first name?') ?? '';
lastName = prompt('What is your last name?') ?? '';
middleName = prompt('What is your middle name?')?? '';

console.log(`${lastName} ${firstName} ${middleName}`);