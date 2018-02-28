import { NgModule } from '@angular/core';

// Components Routing
import { DynamicdataComponent } from './dynamicdata.component';
import { DynamicdataRoutingModule } from './dynamicdata-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    DynamicdataRoutingModule,
    FormsModule,
    CommonModule,
    // HttpModule,
    QRCodeModule,
    Ng2DeviceDetectorModule.forRoot(),
    DynamicdataRoutingModule
  ],
  declarations: [
    DynamicdataComponent
  ]
})
export class DynamicdataModule { }

