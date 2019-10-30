import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "accent";
  btnDisable = true;
  colors = [
    "accent", "primary", "warn"
  ];
  idx = 0 ;

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.idx = (this.idx+1) % this.colors.length;
    },1000);
  }

}
