import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ChangeComponent } from './change.component';
import { ChangeRoutingModule } from './change-routing.module';

@NgModule({
  imports: [
    ChangeRoutingModule,
    ChartsModule
  ],
  declarations: [ ChangeComponent ]
})
export class ChangeModule { }
