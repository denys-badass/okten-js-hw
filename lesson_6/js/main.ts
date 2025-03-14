// Task 6.1
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// Task 6.2
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// Task 6.3
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// Task 6.4
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str: string = ' dirty string   ';
str = str.trim();

// Task 6.5
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray: (str: string) => string[] = (str: string): string[] => str.split(' ');

str = 'Ревуть воли як ясла повні';
let arr: string[] = stringToArray(str);

// Task 6.6
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numbersAsStr: string[] = numbers.map(number => number + '');

// Task 6.7
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums: (array: number[], direction: string) => void = (array: number[], direction: string): void => {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a);
    }
}

// Task 6.8
// - є масив
type Course = {
    title: string,
    monthDuration: number,
}
const coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a: Course, b: Course): number => b.monthDuration - a.monthDuration);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const moreFiveMonthsCourses: Course[] = coursesAndDurationArray.filter((value: Course): boolean => value.monthDuration > 5);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
type CourseWithId = Course & {id: number};
const coursesWithId: CourseWithId[] = coursesAndDurationArray.map((value: Course, index: number): CourseWithId => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
});

// Task 6.9
//  описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
type Card = {
    value: string;
    cardSuit: string;
    color: string;
}
const cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues: string[] = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const cardDeckFiller: (suits: string[], values: string[]) => Card[] = (suits: string[], values: string[]): Card[] => {
    const deck: Card[] = [];
    for (const suit of suits) {
        if (suit === 'spade' || suit === 'clubs') {
            for (const value of values) {
                deck.push({value: value, cardSuit: suit, color: 'black'});
            }
        } else if (suit === 'diamond' || suit === 'heart') {
            for (const value of values) {
                deck.push({value: value, cardSuit: suit, color: 'red'});
            }
        }

    }
    return deck;
}

const cardDeck: Card[] = cardDeckFiller(cardSuits, cardValues);

//  - знайти піковий туз
const spadeAce: Card | undefined = cardDeck.find(({value, cardSuit}: Card): boolean => value === 'A' && cardSuit === 'spade');

//  - всі шістки
const cardsWithSixValue: Card[] = cardDeck.filter((card: Card) : boolean => card.value === '6');

//  - всі червоні карти
const redCards: Card[] = cardDeck.filter((card: Card): boolean => card.color === 'red');

//  - всі буби
const diamondCards: Card[] = cardDeck.filter((card: Card): boolean => card.cardSuit === 'diamond');

//  - всі трефи від 9 та більше
const clubTopCards: Card[] = cardDeck.filter((card: Card): boolean => card.cardSuit === 'clubs' && (card.value >= '9' || card.value === '10'));

// Task 6.10
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
type Deck = {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

const deckBySuit: Deck = cardDeck.reduce((acc: Deck, card: Card) : Deck => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

// Task 6.11
// взяти з arrays.js масив coursesArray
type CourseWithModules = Course & {hourDuration: number, modules: string[]};

const coursesArray: CourseWithModules[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass
const coursesWithSass: CourseWithModules[] = coursesArray.filter((value: CourseWithModules): boolean => value.modules.includes('sass'));

// --написати пошук всіх об'єктів, в яких в modules є docker
const coursesWithDocker: CourseWithModules[] = coursesArray.filter((value: CourseWithModules): boolean => value.modules.includes('docker'));
