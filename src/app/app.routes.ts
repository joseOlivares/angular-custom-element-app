import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sam-hardware/home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'sam-hardware/users',
    loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
