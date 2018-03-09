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
    redirectTo: 'home',
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
        path: 'dashboard/:id',
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
        path: 'features',
        loadChildren: './views/features/features.module#FeaturesModule'
      },
      {
        path: 'pricing',
        loadChildren: './views/pricing/pricing.module#PricingModule'
      },
      {
        path: 'help',
        loadChildren: './views/help/help.module#HelpModule'
      },
      {
        path: 'blog',
        loadChildren: './views/blog/blog.module#BlogModule'
      },
      {
        path: 'payment',
        loadChildren: './views/payment/payment.module#PaymentModule'
      },

      {
        path: 'personal',
        loadChildren: './views/personal/personal.module#PersonalModule'
      },

      {
        path: 'subscription',
        loadChildren: './views/subscription/subscription.module#SubscriptionModule'
      },
      {
        path: 'change',
        loadChildren: './views/change/change.module#ChangeModule'
      },
      {
        path: 'qrcode',
        loadChildren: './views/qrcode/qrcode.module#QrcodeModule'
      },
      {
        path: 'contact',
        loadChildren: './views/contact/contact.module#ContactModule'
      },
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },

      // {
      //   path: 'text',
      //   loadChildren: './views/text/text.module#TextModule'
      // },
      {
        path: 'myqrcode',
        loadChildren: './views/myqrcode/myqrcode.module#MyqrcodeModule'
      },
      {
        path: 'dynamicdata/:id',
        loadChildren: './views/dynamicdata/dynamicdata.module#DynamicdataModule'
      },
      {
        path: 'mycode',
        loadChildren: './views/mycode/mycode.module#MycodeModule'
      },

      // {
      //   path: 'vcard',
      //   loadChildren: './views/vcard/vcard.module#VcardModule'
      // },
      {
        path: 'setting',
        loadChildren: './views/setting/setting.module#SettingModule'
      },

      {
        path: 'demo/:id',
        // path: 'demo',
        loadChildren: './views/demo/demo.module#DemoModule'
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
  imports: [RouterModule.forRoot(routes), HttpModule],
  exports: [RouterModule]
})
export class AppRoutingModule { } 