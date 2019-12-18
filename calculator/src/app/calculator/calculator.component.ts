import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title="Calculator";
  result="";
  
  
  constructor() { }

  ngOnInit() {
    
  }
  /*add(data){
    if(data=="="){
      this.result=eval(this.result);
    }
    else{
      this.result+=data;
    }
    }*/

    add(data){
      this.result+=data;
    }
      
          
  





}
