import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  imports: [
    SettingRoutingModule,
    ChartsModule
  ],
  declarations: [ SettingComponent ]
})
export class SettingModule { }
