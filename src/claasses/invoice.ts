import { HasFormater } from "../interfaces/HasFormater";
export class Invoice implements HasFormater {
    // readonly client: string; // ne moze se menjati ali se moze pristupiti
    // private details: string; // ne moze se procitaati ali se moze prikazati kroz metodu
    // public amount: number; // moze se menjati i citati 


    constructor( // ovo je kraci nacin pisanja za ovo iznad
        public client: string,
        public details: string,
        public amount: number,
    ) {

    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}