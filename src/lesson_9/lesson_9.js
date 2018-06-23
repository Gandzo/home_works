import './lesson_9.scss';

const someBtn = document.querySelector('button');
console.log(someBtn);
function greet() {
    const name = prompt ('Hello world');
    alert(`Hello, ${name} !`);
}

someBtn.addEventListener('click', greet);
