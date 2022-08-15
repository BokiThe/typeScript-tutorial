import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
const form1 = document.querySelector('form');
const form = document.querySelector('.new-item-form');
const form2 = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    type.value === 'invoice' ?
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        :
            doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, "end");
});
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'bojan', age: 33 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'name of the wind' },
};
const docFour = {
    uid: 10,
    resourceName: ResourceType.PERSON,
    data: { name: 'Bojan' },
};
console.log(docThree, docFour);
