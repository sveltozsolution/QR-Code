import { NgModule } from '@angular/core';

// Components Routing
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    DemoRoutingModule,
    FormsModule,
    CommonModule,
    HttpModule,
    QRCodeModule,
    
  ],
  declarations: [
    DemoComponent
  ]
})
export class DemoModule { }

