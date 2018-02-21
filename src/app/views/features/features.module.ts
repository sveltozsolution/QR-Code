import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [
    FeaturesRoutingModule,
    ChartsModule
  ],
  declarations: [ FeaturesComponent ]
})
export class FeaturesModule { }
