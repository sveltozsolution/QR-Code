import {DemoComponent } from './demo.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


const routes: Routes = [{
  
    path: '',
    component: DemoComponent,

    data: {
      title: 'Demo'
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes), HttpModule],
    exports: [RouterModule]
  })
  export class DemoRoutingModule {}