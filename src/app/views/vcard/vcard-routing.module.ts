import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VcardComponent } from './vcard.component';

const routes: Routes = [
  {
    path: '',
    component: VcardComponent,
    data: {
      title: 'Vcard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VcardRoutingModule {}
