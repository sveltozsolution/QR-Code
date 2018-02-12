


import { NgModule } from '@angular/core';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Components Routing
import { MyqrcodeComponent } from './myqrcode.component';
import { MyqrcodeRoutingModule } from './myqrcode-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    MyqrcodeRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    QRCodeModule
  ],
  declarations: [
    MyqrcodeComponent
  ]
})
export class MyqrcodeModule { }

