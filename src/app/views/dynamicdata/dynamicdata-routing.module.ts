import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {DynamicdataComponent } from './dynamicdata.component';


const routes: Routes = [{
  
    path: '',
    component: DynamicdataComponent,

    data: {
      title: 'Dynamicdata'
    }
  //   { 
  //     path: '', redirectTo: 'Dynamicdata', pathMatch: 'full' 
  // },
  //   {
  //      path: 'Dynamicdata', component: DynamicdataComponent
  //  },
  //   {
  //      path: 'Dynamicdata/:id', component: DynamicdataComponent
  //  }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpModule],
  exports: [RouterModule]
})
export class DynamicdataRoutingModule {}
