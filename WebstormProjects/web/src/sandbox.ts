class Invoice {
    client:string;
    details:string;
    amount:number;
    constructor(c:string, d:string, a:number) {
        this.client= c;
        this.details = d;
        this.amount = a;

    }
    formart(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}












const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})