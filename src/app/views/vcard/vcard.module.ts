import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VcardComponent } from './vcard.component';
import { VcardRoutingModule } from './vcard-routing.module';

@NgModule({
  imports: [
    VcardRoutingModule,
    ChartsModule
  ],
  declarations: [ VcardComponent ]
})
export class VcardModule { }
