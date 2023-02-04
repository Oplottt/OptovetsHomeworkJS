let arr1;
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);



let book1 = {
    title:'The Hobbit, or There and Back Again',
    pageCount: 299,
    genre: 'fantasy'
}
console.log(book1);
let book2 = {
    title:'Kobzar',
    pageCount: 744,
    genre: 'compilation'
}
console.log(book2);
let book3 = {
    title:'Kaidash family',
    pageCount: 232,
    genre: 'realistic social story'
}
console.log(book3);



let book4 = {
    title: 'Forest song',
    pageCount: 256,
    genre: 'extravaganza drama',
    author: [name ='Lesya Ukrainka', age = 41]

}
console.log(book4);
let book5 = {
    title: 'JS complete guide',
    pageCount: 720,
    genre: 'directory',
    author: [name = 'David Flanagan', age = 50]
}
console.log(book5);
let book6 = {
    title: 'Shrek!',
    pageCount: 48 ,
    genre: 'childrens literature',
    author: [name = 'William Steig', age = 96]
}
console.log(book6);



let users;
users =[
    {name:'olya', username:'regre', password: 45356 },
    {name:'anya', username:'thrhrth', password: 64367 },
    {name:'lera', username:'rhtrh', password: 65432 },
    {name:'stas', username:'rbberge', password: 14578 },
    {name:'sasha', username:'etbrrb', password: 35268 },
    {name:'petya', username:'brbtsvfe', password: 63836 },
    {name:'tanya', username:'rdfbb', password: 93648 },
    {name:'maria', username:'rbfdb', password: 76296 },
    {name:'michael', username:'dbtreb', password:53454},
    {name:'mark', username:'btreeb', password: 42745 },
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



let a = 7;
if (a!==0) {
    console.log ('Вірно')
}
else {
    console.log('Невірно')
}



let time = 35;
if (time <=15) {
    console.log('Перша чверть')
}
else if  (time <=30 ) {
    console.log('Друга чверть')
}
else if  (time <=45) {
    console.log('Третя чверть')
}
else if (time <=59) {
    console.log('Четверта чверть')
}
else if (time >=60) {
    console.log('Введіть час від 0 до 59!')
}

let day = 11;
if ((day >=1 ) && (day <=10)){
    console.log('Перша декада')
}
else if (day <=20){
    console.log('Друга декада')
}
else if (day <=31){
    console.log('Третя декада')
}
else if (day >=32) {
    console.log('Введіть число від 1 до 31!')
}
let weekday = +prompt( 'Введіть порядковий номер дня тижня' );
switch (weekday){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Введіть порядковий номер тижня від 1 до 7!');
}



let b = +prompt ('Введіть перше число')
let c = +prompt ('Введіть друге число')
if (b>c) {
    console.log(b)
}
else if (c>b) {
    console.log(c)
}
else if (b===c){
    console.log('Числа рівні')
}


let x = 5;
x = x || "default"
    console.log(x)




{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];


    if (coursesAndDurationArray[0].monthDuration > 5){
        console.log('Super!')
    }
    else{
        console.log('NotSuper!')
    }
    if (coursesAndDurationArray[1].monthDuration > 5){
        console.log('Super!')
    }
    else{
        console.log('NotSuper!')
    }
    if (coursesAndDurationArray[2].monthDuration > 5){
        console.log('Super!')
    }
    else{
        console.log('NotSuper!')
    }
    if (coursesAndDurationArray[3].monthDuration > 5){
        console.log('Super!')
    }
    else{
        console.log('NotSuper!')
    }
    if (coursesAndDurationArray[4].monthDuration > 5){
        console.log('Super!')
    }
    else{
        console.log('NotSuper!')
    }
    if (coursesAndDurationArray[5].monthDuration > 5){
        console.log('Super!')
    }
    else{
        console.log('NotSuper!')
    }
}