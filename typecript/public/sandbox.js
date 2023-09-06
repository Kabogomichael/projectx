"use strict";
let person = [];
person.push('hello');
person.push(20);
person.push(true);
console.log(person);
console.log('my name');
let Kenya;
let age = 25;
age = 'old';
age = 24;
console.log(age);
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add('moya', 'mike');
let student;
student = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const form = document.querySelector('.new-item-form');
console.log(form.children);
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for${this.details};`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('liugi', 'work on the liugi website', 300);
console.log(invOne, invTwo);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
