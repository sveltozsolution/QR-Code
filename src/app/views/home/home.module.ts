import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HomeComponent } from './home.component';
import {HomeRoutingModule } from './home-routing.module';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
// import { ColorPickerModule } from 'angular4-color-picker';

@NgModule({
  imports: [
    HomeRoutingModule, CommonModule, FormsModule,
    ChartsModule, QRCodeModule
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
