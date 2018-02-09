import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { QrcodeComponent } from './qrcode.component';
import { QrcodeRoutingModule } from './qrcode-routing.module';

@NgModule({
  imports: [
    QrcodeRoutingModule,
    ChartsModule
  ],
  declarations: [ QrcodeComponent ]
})
export class QrcodeModule { }
