import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  imports: [
    PaymentRoutingModule,
    ChartsModule
  ],
  declarations: [ PaymentComponent ]
})
export class PaymentModule { }
