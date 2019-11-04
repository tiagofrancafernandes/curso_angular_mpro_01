import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Ana",
    "Maria",
    "Joana",
    "João"
  ];

  cities = [
    {"name":"Porto Velho", "uf":"RO"},
    {"name":"Rio de Janeiro", "uf":"RJ"},
    {"name":"Mateus Leme", "uf":"MG"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
