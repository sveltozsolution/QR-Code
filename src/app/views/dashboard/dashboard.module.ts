import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { QRCodeModule } from 'angular2-qrcode';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { MyqrcodeRoutingModule } from 'app/views/myqrcode/myqrcode-routing.module';

@NgModule({
  imports: [
    
    DashboardRoutingModule,
    ChartsModule,
    QRCodeModule,
    BsDropdownModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent]
})
export class DashboardModule { }
