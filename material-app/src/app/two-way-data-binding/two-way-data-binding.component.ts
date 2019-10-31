import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  name1: string = "Tiago";
  name2: string = "França";

  client = {
    "firstName":"Tiago",
    "lastName":"Fernandes",
    "address":"",
    "age":25

  };

  constructor() { }

  ngOnInit() {
  }

}
