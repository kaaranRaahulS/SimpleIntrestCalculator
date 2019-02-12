import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    constructor() { }
    ngOnInit() { }

  
    stringamount: string;
    simpleIntrest: Number;
    totalamount : Number;

    getCalculate(pamount, rate, months) {
        this.simpleIntrest = ( (pamount * months * rate) / 100 );
        this.totalamount = this.simpleIntrest + pamount;
    }
}