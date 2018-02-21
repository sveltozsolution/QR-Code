import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DynamicdataComponent } from './dynamicdata.component';


const routes: Routes = [
  {
    path: '',
    component: DynamicdataComponent,
    data: {
      title: 'Dynamicdata'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicdataRoutingModule {}
