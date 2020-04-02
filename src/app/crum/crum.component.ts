import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crum',
  templateUrl: './crum.component.html',
  styleUrls: ['./crum.component.css']
})
export class CrumComponent implements OnInit {
  
  weight:number;
  displayedColumns: string[] = ['ID', 'DATE', 'WEIGHT', 'AMOUNT','TOTAL'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.dataSource.push({ID:3,DATE:'12-05-1997',WEIGHT:this.weight,AMOUNT:'H',TOTAL:'total'});
  }

}

export interface PeriodicElement {
  DATE: string;
  ID: number;
  WEIGHT: number;
  AMOUNT: string;
  TOTAL:string;
}

var ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, DATE: '12-05-2019', WEIGHT: 1.0079, AMOUNT: '2',TOTAL:'TOTAL'},
  {ID: 2, DATE: '12-05-2019',WEIGHT: 4.0026, AMOUNT: '5',TOTAL:'TOTAL'},
  
];
