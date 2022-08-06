// classes
export class Invoice {
    // readonly client: string; // ne moze se menjati ali se moze pristupiti
    // private details: string; // ne moze se procitaati ali se moze prikazati kroz metodu
    // public amount: number; // moze se menjati i citati 
    constructor(// ovo je kraci nacin pisanja za ovo iznad
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
