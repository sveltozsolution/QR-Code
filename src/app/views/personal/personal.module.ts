import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';

@NgModule({
  imports: [
    PersonalRoutingModule,
    ChartsModule
  ],
  declarations: [ PersonalComponent ]
})
export class PersonalModule { }
