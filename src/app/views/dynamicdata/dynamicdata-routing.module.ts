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
  
    // path: '',
    // component: DynamicdataComponent,

    // data: {
    //   title: 'Dynamicdata'
    // }
//     { 
//       path: '', redirectTo: 'Dynamicdata', pathMatch: 'full' 
//   },
//     {
//        path: 'Dynamicdata', component: DynamicdataComponent
//    },
//     {
//        path: 'Dynamicdata/:id', component: DynamicdataComponent
//    }
  
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicdataRoutingModule {}
