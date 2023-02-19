//- Знайти та вивести довижину настипних стрінгових значень
let a = 'hello world'
console.log(a.length)
let a1 = 'lorem ipsum'
console.log(a1.length)
let a2 = 'javascript is cool'
console.log(a2.length)
//- Перевести до великого регістру наступні стрінгові значення
let b = 'hello world'
console.log (b.toUpperCase())
let b1 = 'lorem ipsum'
console.log (b1.toUpperCase())
let b2 = 'javascript is cool'
console.log (b2.toUpperCase())
//- Перевести до нижнього регістру настипні стрінгові значення
let c = 'HELLO WORLD'
console.log(c.toLowerCase())
let c1 = 'LOREM IPSUM'
console.log(c1.toLowerCase())
let c2 = 'JAVASCRIPT IS COOL'
console.log(c2.toLowerCase())
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let d =  ' dirty string   '
let d1 = d.replaceAll(' d', 'd')
console.log(d1)
let d2 = d1.replaceAll('g   ', 'g')
console.log(d2)
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні'
let str1 = str.split(' ')
console.log(str1)
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let num = [10,8,-7,55,987,-1011,0,1050,0]
   let num1 = num.map((num) => num.toString())
    console.log(num1)
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
let nums = [11,21,3]
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort(function(a, b) {
            return a - b
        })
    } else if (direction === 'descending') {
        return nums.sort(function(a, b) {
            return b - a
        })
    }
}
console.log(sortNums([11,21,3], 'descending'))
//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a,b) =>{
    return b.monthDuration - a.monthDuration
}))
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(coursesAndDurationArray => coursesAndDurationArray.monthDuration > 5)
console.log(filter)
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((value, index) =>{
    return {id:index + 1 , title: value.title, monthDuration: value.monthDuration }
})
console.log(map)
// описати колоду карт (від 6 до туза без джокерів)
let Deck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
]
// - знайти піковий туз
function AceOfSpades(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].cardSuit === 'spade' && arr[i].value === 'ace') {
            return arr[i]
        }
    }
}
console.log(AceOfSpades(Deck))
// - всі шістки
let six = Deck.filter(card => card.value === '6');
console.log(six)
//- всі буби
let diamond = Deck.filter(card => card.cardSuit === 'diamond');
console.log(diamond)
// - всі трефи від 9 та більше
let heartNine = Deck.filter(card => card.cardSuit === 'heart' && card.value >= 9);
console.log(heartNine)
//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let cardsPack = Deck.reduce((result, card) => {
    result[card.cardSuit].push(card)
    return result
},
    { heart: [], diamond: [],  clubs: [], spade: [] })
console.log(cardsPack)
    //взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
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
//написати пошук всіх об'єктів, в який в modules є sass
let sass =  coursesArray.filter(course => course.modules.includes('sass'))
console.log(sass)
//--написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(course => course.modules.includes('docker'))
console.log(docker)