import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    ContactRoutingModule,
    ChartsModule
  ],
  declarations: [ ContactComponent ]
})
export class ContactModule { }
