import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    BlogRoutingModule,
    ChartsModule
  ],
  declarations: [ BlogComponent ]
})
export class BlogModule { }
