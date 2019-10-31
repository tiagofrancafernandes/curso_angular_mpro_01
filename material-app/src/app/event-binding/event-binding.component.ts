import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "Click here";
  spinnerMode = "determinate";
  btnEnable = true;
  spinnerValue = 0;
  i = 0 ;
  selectDisabled = false;
  selectedOption = 1;
  firstName = "Tiago";

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log('save');
  }

  inc(){
    this.i = (this.i+1) % 100;
    this.buttonName = "It was clicker " + this.i +" times";
    this.spinnerValue = this.i;
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(()=>{
      this.btnEnable = true;
      this.spinnerMode = "determinate";},3000);
  }
  cbChange(event){
    this.selectDisabled = event.checked;
  }
  selectionChange(event){
    this.selectedOption = event.value;
  }
  /* inputEvent(event){
     this.firstName = event.target.value;
   }
   //modificado para usar two way data binding
  */


}
