import './lesson_9.scss';

function notificationBar() {
    const notificationBarElement = document.querySelector('.notification-bar');
    const control = document.querySelector('.notification-bar__btn');


    console.log(control);
    console.log(notificationBarElement);
    function toggleMessage() {
        notificationBarElement.classList.toggle('notification-bar_active');
    }
    control.addEventListener('click' , toggleMessage );
}
notificationBar();

const someBtn = document.querySelector('button');
const btn = document.querySelector('.btn-hello');
console.dir(someBtn);

function greet() {
    const name = prompt ('Hello world');
someBtn.classList.add('.btn_toucthed');
    // someBtn.style.background = 'red';
    alert(`Hello, ${name} !`);
}
someBtn.addEventListener('click', greet);

function hello() {
    alert('Hello');
}
btn.addEventListener('click', hello);


