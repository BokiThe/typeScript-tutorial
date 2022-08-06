"use strict";
// **** lesson 1 -2  ****
// let character = 'mario';
// let age = 20;
// let isBlackBelt = false;
// //character = 20
// character = 'bojan';
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(3))
// ********** lesson 3 arrays and objects *****
//array
// let names = ['bojan', 'spaske', 'bogda'];
// // kada se deklarise niz sa jednim tipom nemoguce je ubaciti u taj niz neki drugi tip...
// let mixed = ['bojan',3,5,'stagod'];
// mixed[1] = 'promena';
// //mixed.push(false) // nije moguce ubaciti drugi tip opet samo one tipove koje sadrzi niz pri inicijalizaciji
// // objects
// let user = {
//     name: "bojan",
//     surname: "ristic",
//     age: 20,
// }
// nije moguce promeniti tip saame varijable posle inicijalizacije niti je moguce dodati objektu novi property. mora ostati onakav kakaav jeste pri inicijalizaciji.. mogu mu se promeniti vrednosti aali istog tipa... 
// **** lesson 4 inicijalizacija varijabli *****
// // eksplicidni tipovi 
// let character: string;
// let age: number;
// let isLogedIn: boolean;
// // nizovi
// let niz: string[] = []; // = [] se staavlja da bi odmahj inicijalizovali prazaan niz da bi mogli da akoristimo push metodu jer pre toga nije inicijalizovano kao prazan niz vec kao niz koji bi u buducnosti trebao da prihvati string
// // mixovani tipovi
// let mixed: (string | number | boolean)[] = [];
// mixed.push(23);
// mixed.push("nesto");
// mixed.push(false);
// console.log(mixed)
// let mix: string | number; // ovde koristimo da jedna varijabla moze da menja tip samo za string i za broj;
// mix = "123";
// mix = 123;
// //objekti
// let ninjaOne: object;// kada ovako deklarisemo tip neke vaarijable moze se desiti da amozemo koristiti i niz jer je i niz jedna vrsta objektaa
// ninjaOne = { name: "bojaan", age: 33 };
// ninjaOne = ["cao", 23];
// let ninjaTwo: {
//     name: string,
//     age: number,
//     belt: string,
// }; // ovako govorimo da aje objekat bas objekat a ne tip objekat... i takodje mozemo odmaah da stavimo i tipove za propertije koji nece daa se menjaju
// *** lekcija 8 ***
// let greet: Function;
// greet = () => {
//     console.log("hello, world!")
// }
// const add = (a: number, b: number, c: number | string = 10) => {
//     console.log(a + b)
//     console.log(c)
// }
// add(3, 10)
// **** lection 9 *** alias types
// kaadaa imamo vise parametara koji koriste iste tipove podataka koristimo svoj sopstveni tip da se ne bi ponavljao kod
// type strinfOrNumber = string | number;
// type objWithNaame = { name: string, uid: strinfOrNumber };
// const logDetails = (uid: strinfOrNumber, item: string) => {
//     console.log(`${item} has uid of ${uid}`)
// }
// const greet = (user: objWithNaame) => {
//     console.log(`${user.name} says hallo`);
// }
// ***** lection 10 *** function signatures\\\
// mozemo obeleziti tacno kako ce da izgleda ta funkcija tj njen potpis (signiture)
//let greet: Function; //osnovni bilo koja funkcija
// primer 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting} `);
};
//primer 2
// ovde vidimo 3 parametra u funkciji koja ne vraacaju bilo sta tj ne vracaju console log ili taakoi nesto vec specificno moraju vratiti broj.
let calc;
// pri definisanju ovaakve funkcije  potrebno je naapisati i return nije dovoljno samo staviti u if else... znaci mora da se napise return ne moze da ase ostavi bez njega jer se radi u striktnom modu. vraca kao error da je specifikovano signiturom da mora da vraati broj daa nije void i funkcija kao takva nece raditi.
calc = (numOne, numTwo, action) => {
    return action === "add" ? numOne + numTwo : numOne - numTwo;
};
//primer 3
let logDetails;
// pa mozemo napisati
logDetails = (ninja1) => {
    console.log(`${ninja1.name} is ${ninja1.age} years old`);
};
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
