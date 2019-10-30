import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  firstName = "Tiago";
  person = {
    firstname: "Tiago",
    lastname: "França",
    age: 25,
    address: "Rua tal, 123"
  }

  constructor() { }

  ngOnInit() {
  }

}
