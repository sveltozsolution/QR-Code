import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TextComponent } from './text.component';
import { TextRoutingModule } from './text-routing.module';

@NgModule({
  imports: [
    TextRoutingModule,
    ChartsModule
  ],
  declarations: [ TextComponent ]
})
export class TextModule { }
