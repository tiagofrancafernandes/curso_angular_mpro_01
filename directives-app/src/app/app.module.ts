import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ConsolePrintComponent } from './console-print/console-print.component';
import { NgClassComponent } from './ng-class/ng-class.component';



@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ConsolePrintComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
