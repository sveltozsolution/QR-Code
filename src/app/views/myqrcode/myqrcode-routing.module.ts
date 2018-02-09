import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyqrcodeComponent } from './myqrcode.component';

const routes: Routes = [
  {
    path: '',
    component: MyqrcodeComponent,
    data: {
      title: 'Myqrcode'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyqrcodeRoutingModule {}
