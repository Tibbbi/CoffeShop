
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home.routes').then(m => m.HOME_ROUTES)
  }
];
