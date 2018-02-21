import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';

@NgModule({
  imports: [
    SubscriptionRoutingModule,
    ChartsModule
  ],
  declarations: [ SubscriptionComponent ]
})
export class SubscriptionModule { }
