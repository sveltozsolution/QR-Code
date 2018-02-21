import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  imports: [
    HelpRoutingModule,
    ChartsModule
  ],
  declarations: [ HelpComponent ]
})
export class HelpModule { }
