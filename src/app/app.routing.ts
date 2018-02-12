import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'components/forms',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'qrcode',
        loadChildren: './views/qrcode/qrcode.module#QrcodeModule'
      },
      // {
      //   path: 'contact',
      //   loadChildren: './views/contact/contact.module#ContactModule'
      // },
      // {
      //   path: 'text',
      //   loadChildren: './views/text/text.module#TextModule'
      // },
      {
        path: 'myqrcode',
        loadChildren: './views/myqrcode/myqrcode.module#MyqrcodeModule'
      },
      // {
      //   path: 'vcard',
      //   loadChildren: './views/vcard/vcard.module#VcardModule'
      // },
      {
        path: 'setting',
        loadChildren: './views/setting/setting.module#SettingModule'
      },
      // {
      //   path: 'mycode',
      //   loadChildren: './views/mycode/mycode.module#MycodeModule'
      // }

    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),HttpModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
