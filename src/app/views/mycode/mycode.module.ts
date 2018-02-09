import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MycodeComponent } from './mycode.component';
import { MycodeRoutingModule } from './mycode-routing.module';

@NgModule({
  imports: [
    MycodeRoutingModule,
  
  ],
  declarations: [ MycodeComponent ]
})
export class MycodeModule { }
