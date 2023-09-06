"use strict";
// interface IsPerson {
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a: number):number;
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// const me : IsPerson = {
//     name:'shaun',
//     age:30,
//     speak(text:string): void{
//         console.log(text);
//     },
//     spend(amount:number):number{
//         console.log('i spent',amount);
//             return amount;
//     },
// }
// let person :( number | boolean | string )[] = [];
// person.push ('hello');
// person.push (20);
// person.push(true);
// console.log(person);
// console.log('my name');  
// let Kenya :{
//     name:string,
//     age:number,
//     about:boolean
// } 
// let age: any = 25;
// age = 'old';
// age = 24;
// console.log(age);
// const add = (a:string, b:string , c: number | string =10) =>{ 
// console.log(a + b);
// }
// add('moya','mike')   
// let student : (obj:{name:string, age: number})=>void;
// student = (ninja:{name:string, age:number}) =>{
//     console.log(`${ninja.name} is ${ninja.age} years old`)
// }
// const invOne =  new Invoice('mario', 'work on the mario website', 250);
// const invTwo =  new Invoice('liugi', 'work on the liugi website', 300);
// console.log(invOne, invTwo); 
var Invoice_js_1 = require("./classes/Invoice.js");
var payment_js_1 = require("./classes/payment.js");
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
var docOne;
var docTwo;
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoce') {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// generics
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docThree = addUID({ name: 'Moya', age: 30 });
console.log(docThree);
