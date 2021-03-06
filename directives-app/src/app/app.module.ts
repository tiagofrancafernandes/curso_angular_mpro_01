import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
} from "@angular/material";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ConsolePrintComponent } from './console-print/console-print.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';



@NgModule({
   declarations: [
      AppComponent,
      NgStyleComponent,
      ConsolePrintComponent,
      NgClassComponent,
      NgIfComponent,
      SubNgIfComponent,
      NgForComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatCheckboxModule,
      MatInputModule,
      MatListModule,
      MatIconModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
