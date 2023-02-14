//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle (a, b) {
    if (( a > 0) && (b > 0)) {
        let result = a * b
        return result
    }
}
console.log(rectangle (3, 2))

//створити функцію яка обчислює та повертає площу кола з радіусом r
function radius (d) {
    if (d>0) {
        let result = d/2
        return result
    }
}
let r2 = radius (8)
console.log(r2)
//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (h, r){
    if (( h > 0) && (r > 0)){
        let result = 2 * 3.14 * r * h
        return result
    }
}

let c1 = cylinder (2, 7)
console.log (c1)

//створити функцію яка приймає масив та виводить кожен його елемент
arr = [1,2,3,4,5]
function showNumber(arr) {
    for (const arrElement of arr)
        console.log(arrElement)
}
showNumber(arr)

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreator (text){
    document.write(`<p> ${text} </p>`)
}
paragraphCreator(`dwqww`)
paragraphCreator(`dfwewefre`)
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write(`<ul><li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`)
}
list (`edfe`)
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text, a) {
    document.write(`<ul>`)
    for (let b = 0; b<a; b++) {
        document.write( `<li>${text}</li>`)
    }
    document.write(`<ul>`)
}
list2(`feefew`, 3)
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function users(arr) {
    for (const item of arr){
        document.write(`<li>${item}</li>`)
    }
}
users ([25, `fefw`, true])



//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userList = [
    {id: 1, name: 'anya', age:22},
    {id: 2,name: 'olya',  age:32}
];
function usersElement (arr){
    for (let i = 0; i < arr.length; i++){
        const item = arr[i]
        document.write(`<div>${item.id}, ${item.name}, ${item.age} </div>`)
    }
}
usersElement (userList)
//створити функцію яка повертає найменьше число з масиву
let numberList = [-100,2,3,4]
function minNumber(arr) {
    let min = arr[0] ;
    for (const item of arr){
        if (min > item){
            min = item
        }
    }
    return min
}
console.log(minNumber(numberList))
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(numbers) {
    let addNUM = 0;
    for (const number of numbers){
        addNUM += number;
    }
    return addNUM
}
let r1 = sum([1,3,10])
console.log(r1)
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let m1 = arr[index1];
    let m2 = arr[index2];
    arr[index1] = m2;
    arr[index2] = m1;
    return arr
}
console.log(swap ([2, 4, 8, 10,12], 1, 3));
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues){
        if (item.currency ===exchangeCurrency){
            return  sumUAH/item.value
        }
    }
}
console.log(exchange (10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
