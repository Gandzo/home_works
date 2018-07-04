import { Lighter} from "./components/lighter/lighter";

const firstLighter = new Lighter(document.querySelector('#lighter1'));


function test() {
    console.log('Test');
}

function greeting() {
    console.log(this);
    console.log('Hello my name is, ' + this.name);
}
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = greeting;
}
function Developer(name , age, lang) {
    Person.call(this, name, age);
    this.lang = lang;
    this.greet = greeting;
    this.develop = function(){
        console.log('I am programming for '+ this.lang);
    }
}
const person = new Person('John', 30);
const person2 = new Person ('Jack', 35);
const dev1 = new Developer('John', 30,'JavaScript');
const dev2 = new Developer('Jack', 35,'Java');


person.greet();
person2.greet();
dev1.greet();
dev2.greet();
dev2.develop();

function counter() {
    const btn = document.querySelector('#btn');
    let clickCounter = 0;
    btn.addEventListener('click', () => {
        clickCounter++;
        console.log(clickCounter);
    })
}
}


function Car(power,doors) {
    this.doors = 0;
    this.power = power ;
    this.move = false;
}

function SportCar(power,doors) {
    Car.apply(this, arguments);
    this.canMove = function(move) {
        this.move = true;

    }
}
function Sedan(power) {
    Car.apply(this, arguments);

}
let sedan1 = new Car (2000, 4);

