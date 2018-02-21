import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MycodeComponent } from './mycode.component';
import { MycodeRoutingModule } from './mycode-routing.module';
import { QRCodeModule } from 'angular2-qrcode';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    MycodeRoutingModule,QRCodeModule,FormsModule,CommonModule
  
  ],
  declarations: [ MycodeComponent ]
})
export class MycodeModule { }
