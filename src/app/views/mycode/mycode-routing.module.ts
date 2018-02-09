import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycodeComponent } from './mycode.component';

const routes: Routes = [
  {
    path: '',
    component: MycodeComponent,
    data: {
      title: 'Mycode'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycodeRoutingModule {}
