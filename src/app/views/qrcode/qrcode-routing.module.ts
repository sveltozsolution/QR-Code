import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeComponent } from './qrcode.component';

const routes: Routes = [
  {
    path: '',
    component:QrcodeComponent,
    data: {
      title: 'qrcode'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodeRoutingModule {}
