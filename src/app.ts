import { Invoice } from "./classes/invoice";
const anchor = document.querySelector('a')!;


anchor ? console.log(anchor.href) : false; // ovo je jedan naacin daa se izbegne warning koji se javlja u typescriptu kao moguci NULL jer typescript ne zna tj nema direktan pojam o tome staa sve ima u html fajlu i zato baca warning kaada su u pitanju neki od tipova html tagova u ovom slucaju link jer on moze da nema href atribut.

// stoga postoji 2 nacina koja koristimo za izbegavanje ovakvih warninga a to je da stavimo if else tj da proverimo da li to nesto postoji pre nego daa proverimo njegove propertije  ili samo stavimo znak uzvika "! " na kraju samog statementa , sto oznacava daa ce typescript prvo proveriti da li to opostoji pre nego bilo sta daa odraadi

// takodje kul stvar u vezi typescripta kada se iz njega izvlace dom elementi jeste da kada hoverujemo preko samog elementa primeticemo da je on odmah prepoznao koji je to element u dom stablu i kada ga koristimo mozemo da koristimo i njegove atribute, tj izacice nam svi njegovi atributi kada staavimo npe anchor.(izacice padajuci meni sa atributima)

const form1 = document.querySelector('form')!; // kada hoverujemo preko ovoga recice nam da je to type form-a, ali ovde sada hvata prvu formu na koju naidje, a mi zelimo neku specificnu formu u dom stablu, naravno koristimo mogucnost daa uhvatimo preko id ili classe.

const form = document.querySelector('.new-item-form')!;// dok ce ovde daa nam kaze da je to samo element jer smo ga uhvatili preko classe.

// kako to da se prebrodi kaada bas hocemo taj specifican element i sve njegove atribute, pa dodavanjem AS elementaa

const form2 = document.querySelector('.new-item-form') as HTMLFormElement; // sada kada hoverujemo dobicemo daa je tip isti kao i kod form1 , i opet imamo dostupnost svim atributima, i da, ovde nam nije potreban znak uzvika jer kada preuzme ovako specificno element on odma zna da postoji.
//console.log(form.children)

// inputs 

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber)
})



const invOne = new Invoice('maario', 'work on mario website', 250);

const invTwo = new Invoice('luigi', 'work on luigi website', 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

// 

invoices.forEach(inv => {
    console.log(`${inv.client} ${inv.amount}$  \n ${inv.format()}`)
})


// *** lection 14 *** module



// *** Lection 15 ***  interfaces

