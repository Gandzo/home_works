import './lesson_9.scss';
import {lighter} from './scripts/lighter';


// const lighterElement = document.querySelector('#lighter1');
// const lighterElement2 = document.querySelector('#lighter2');
// const lighterElement3 = document.querySelector('#lighter3');
//
// lighter(lighterElement);
// lighter(lighterElement2);
// lighter(lighterElement3);


// function notificationBar() {
//     const notificationBarElement = document.querySelector('.notification-bar');
//     const control = document.querySelector('.notification-bar__btn');
//
//
//     console.log(control);
//     console.log(notificationBarElement);
//     function toggleMessage() {
//         notificationBarElement.classList.toggle('notification-bar_active');
//     }
//     control.addEventListener('click' , toggleMessage );
// }
// notificationBar();
//
// const someBtn = document.querySelector('button');
// const btn = document.querySelector('.btn-hello');
// console.dir(someBtn);
//
// function greet() {
//     const name = prompt ('Hello world');
// someBtn.classList.add('.btn_toucthed');
//     // someBtn.style.background = 'red';
//     alert(`Hello, ${name} !`);
// }
// someBtn.addEventListener('click', greet);
//
// function hello() {
//     alert('Hello');
// }
// btn.addEventListener('click', hello);

//hw_9

// //2
// let user = {
//     name: 'Вася',
//     surname: 'Петров',
// };
// user.name = 'Сергей';
// delete user.name;
// console.log(user);
//
//
// //3
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
//
// let value = {};
//
// console.log(isEmpty(value));
//
// value["Hello"] = "подъём";
//
// console.log(isEmpty(value));
//
//
// //4
// let salaries = {
//     "John": 100,
//     "Jack": 300,
//     "Kate": 270,
// };
//
// let sum = 0;
// for (let name in salaries) {
//     sum += salaries[name];
// }
// console.log(sum);
//
// //5
// let max = 0;
// let maxName = "";
// for (let name in salaries) {
//     if (max < salaries[name]) {
//         max = salaries[name];
//         maxName = name;
//     }
// }
// console.log(maxName || "нет сотрудников");
//
// //6
//
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (isNumeric(obj[key])) {
//             obj[key] *= 2;
//         }
//     }
// }
//
// multiplyNumeric(salaries);
// console.log(salaries);
//
// //8
// let numbers = [];
// while (true) {
//
//     let value = prompt("Введите число", 0);
//
//     if (value === "" || value === null || isNaN(value)) break;
//
//     numbers.push(+value);
// }
//
// let summ = 0;
// for (let i = 0; i < numbers.length; i++) {
//     summ += numbers[i];
// }
// alert(summ);
//
// //9
// function find(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) return i;
//     }
//
//     return -1;
// }
//
// let arrr = [5, "r", "b", 8];
//
// let index = find(arrr, "b");
//
// alert(index);
//
//
// //10
// function filterRange(arr, a, b) {
//     let result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             result.push(arr[i]);
//         }
//     }
//
//     return result;
// }
//
// let arr = [55, 6, 5, 4, 3, 8, 0];
//
// let filtered = filterRange(arr, 0, 4);
// console.log(filtered);
//
//
// //11
// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n <= 1) {
//     alert('Степень ' + n +
//         'не поддерживается, введите целую степень, большую 1'
//     );
// } else {
//     alert(pow(x, n));
// }


const products = [
    {
        title: 'test',
        price: '2500',
    },
    {
        title: 'test',
        price: '2500',
    },
    {
        title: 'test',
        price: '2500',
    }
];

function calcTotal(param) {
    let total = 0;

    for (let i = 0; i < param.length; i++) {

        const number = Number(param[i].price);
        if (isNaN(number) === false) {
            total += number;
        }
    }
    return total;
}

const totalPrice = calcTotal(products);
  console.log(totalPrice);



