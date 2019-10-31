import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-print',
  templateUrl: './console-print.component.html',
  styleUrls: ['./console-print.component.css']
})
export class ConsolePrintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function () {
        if (!console) {
            //console = {};
        }
        var old = console.log;
        var logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    console.log('init console print');
  }

  clearConsolePrint(){
    var logger = document.getElementById('log');
    logger.innerHTML = '';
    console.clear();
    console.log('cleared');
  }

}
