import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
})
export class CalcComponent implements OnInit {
  
  constructor(private ds : DataService) {
  }

// formdata = {};
  months : Number;
  rate : Number;
  principalamount : Number;
  amount : Number;
  totalamounts : Number;
  ngOnInit() {
    
  }

  calculate(){
    // console.log(""+this.formdata);
    this.ds.getCalculate(this.principalamount,this.rate,this.months);
    this.amount = this.ds.simpleIntrest;
    this.totalamounts = this.ds.totalamount;
  }
  
}
