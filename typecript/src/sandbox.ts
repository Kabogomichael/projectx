// interface IsPerson {
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a: number):number;
// }

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


import {Invoice} from './classes/Invoice.js';
import {payment} from './classes/payment.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';
import {ListTemplate} from './classes/ListTemplate.js';



let docOne: HasFormatter;
let docTwo :HasFormatter;
 
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);




const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom= document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let doc:HasFormatter;
    if (type.value === 'invoce'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else{
        doc = new payment (tofrom.value,details.value, amount.valueAsNumber )
    }


    list.render(doc, type.value, 'end')
});
// generics
const addUID = <T extends {name:string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let docThree = addUID ({name:'Moya', age:30})
console.log(docThree);