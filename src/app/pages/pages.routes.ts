import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagenofoundComponent } from '../pagenofound/pagenofound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
      path: 'graphics',
      component: GraphicsComponent,
    },
    {
      path: 'account-settings',
      component: AccountSettingsComponent,
    },
    // {
    //   path: '**',
    //   component: PagenofoundComponent,
    // }
    ]
  },
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
