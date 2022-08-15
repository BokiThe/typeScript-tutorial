
import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
import { HasFormater } from "./interfaces/HasFormater.js";


// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;

// }

// const me: IsPerson = {
//     name: "Bojan",
//     age: 33,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log('I spand', amount);
//         return amount
//     },
// };
// console.log(me);

// const greetPerson = (person: IsPerson) => {
//     console.log("hallo", person.name)
// }
// greetPerson(me)

// let docOne: HasFormater;
// let docTwo: HasFormater;

// docOne = new Invoice("bojan", "web work", 350);
// docTwo = new Peyment("vlada", "web work", 350)

// let docs: HasFormater[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)

// const anchor = document.querySelector('a')!;


// anchor ? console.log(anchor.href) : false; // ovo je jedan naacin daa se izbegne warning koji se javlja u typescriptu kao moguci NULL jer typescript ne zna tj nema direktan pojam o tome staa sve ima u html fajlu i zato baca warning kaada su u pitanju neki od tipova html tagova u ovom slucaju link jer on moze da nema href atribut.

// stoga postoji 2 nacina koja koristimo za izbegavanje ovakvih warninga a to je da stavimo if else tj da proverimo da li to nesto postoji pre nego daa proverimo njegove propertije  ili samo stavimo znak uzvika "! " na kraju samog statementa , sto oznacava daa ce typescript prvo proveriti da li to opostoji pre nego bilo sta daa odraadi

// takodje kul stvar u vezi typescripta kada se iz njega izvlace dom elementi jeste da kada hoverujemo preko samog elementa primeticemo da je on odmah prepoznao koji je to element u dom stablu i kada ga koristimo mozemo da koristimo i njegove atribute, tj izacice nam svi njegovi atributi kada staavimo npe anchor.(izacice padajuci meni sa atributima)

const form1 = document.querySelector('form')!; // kada hoverujemo preko ovoga recice nam da je to type form-a, ali ovde sada hvata prvu formu na koju naidje, a mi zelimo neku specificnu formu u dom stablu, naravno koristimo mogucnost daa uhvatimo preko id ili classe.

const form = document.querySelector('.new-item-form')!;// dok ce ovde daa nam kaze da je to samo element jer smo ga uhvatili preko classe.

// kako to da se prebrodi kaada bas hocemo taj specifican element i sve njegove atribute, pa dodavanjem AS elementaa

const form2 = document.querySelector('.new-item-form') as HTMLFormElement; // sada kada hoverujemo dobicemo daa je tip isti kao i kod form1 , i opet imamo dostupnost svim atributima, i da, ovde nam nije potreban znak uzvika jer kada preuzme ovako specificno element on odma zna da postoji.
//console.log(form.children)

// inputs 

const type = document.querySelector('#type')! as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;
// list item instance
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormater; // creating object thaat has implemented HasFormaater 
    // check if is invoice or payment
    type.value === 'invoice' ?
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        :
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);

    list.render(doc, type.value, "end");
})


// if (Invoice) {

//     const invOne = new Invoice('maario', 'work on mario website', 250);

//     const invTwo = new Invoice('luigi', 'work on luigi website', 300);

//     let invoices: Invoice[] = [];

//     invoices.push(invOne);
//     invoices.push(invTwo);

//     console.log(invoices);

//     // 

//     invoices.forEach(inv => {
//         console.log(`${inv.client} ${inv.amount}$  \n ${inv.format()}`)
//     })
// } else {
//     console.log("nemogu da dobijem ")
// }


// // *** lection 14 *** module



// *** Lection 15 ***  interfaces


// *** Lection #18 *** Generics

// ENUM // objekat koji sadrzi razlicite kljucne reci koje bi mogle da se iskoriste za prikazivanje necega ili oznacavanje necega kada se koristi, ali takodje ce znaciti i samom korisniku nasih funkcija jer ce imati padajuci meni kada koriste neki enum, takodje svako korisecenje propertija ovog objekta vraca broj, tj mesto na kom se nalazi, sto je takodje dobro za privatnost samog koda

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// Sa ovim <T> gde T znaci u principu Type , mozemo da resimo problem sa prikazom propertija iz samog objekta saaamo T ne oznacava nista vec kao i any oznacava bilo koji tip pa zato koristimo metodu extends gde preko nje oznacavamo kojeg ce tipa biti taj podatak i preko njega mozemo da koristimo metode i propertije tog objekta.
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'bojan', age: 33 })

console.log(docOne)


// sa interfejsom

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}


const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'name of the wind' },
}
const docFour: Resource<object> = {
    uid: 10,
    resourceName: ResourceType.PERSON,
    data: { name: 'Bojan' },
}

console.log(docThree, docFour);

// *** Lection 20 *** Tuples

