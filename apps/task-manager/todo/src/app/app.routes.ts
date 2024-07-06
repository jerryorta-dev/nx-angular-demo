import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.component').then((m) => m.HOME_ROUTES)
  },
  {
     path: 'welcome',
    loadChildren: () => import('./pages/nx-welcome/nx-welcome.component').then((m) => m.NX_WELCOME_ROUTE)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
