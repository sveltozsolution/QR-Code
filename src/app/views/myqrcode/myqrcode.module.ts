import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MyqrcodeComponent } from './myqrcode.component';
import { MyqrcodeRoutingModule } from './myqrcode-routing.module';

@NgModule({
  imports: [
    MyqrcodeRoutingModule,
    ChartsModule
  ],
  declarations: [ MyqrcodeComponent ]
})
export class MyqrcodeModule { }
