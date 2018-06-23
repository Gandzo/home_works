import './lesson_6.scss';


//
// let i = 0;
// while (i<= 100) {
//     console.log (i);
//     i++;
// }
//
// for(let i=0; i < 100; i++);
// console.log (i);

//
// const name = prompt ('Enter your name', '');
// if (name === 'admin') {
//     console.log('hello world');
// } else {
//     console.log('hello user');
// }

const someBtn = document.querySelector('button');
console.log(someBtn);
function greet() {
    const name = prompt ('Hello world');
    alert(`Hello, ${name} !`);
}

someBtn.addEventListener('click', greet);