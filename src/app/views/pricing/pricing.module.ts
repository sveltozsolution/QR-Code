import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';

@NgModule({
  imports: [
    PricingRoutingModule,
    ChartsModule
  ],
  declarations: [ PricingComponent ]
})
export class PricingModule { }
