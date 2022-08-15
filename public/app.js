import { Invoice } from "./claasses/invoice";
const anchor = document.querySelector('a');
anchor ? console.log(anchor.href) : false;
const form1 = document.querySelector('form');
const form = document.querySelector('.new-item-form');
const form2 = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
const invOne = new Invoice('maario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(`${inv.client} ${inv.amount}$  \n ${inv.format()}`);
});
const me = {
    name: "Bojan",
    age: 33,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spand', amount);
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log("hallo", person.name);
};
