import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./authentication/authentication.routes').then((m) => m.AUTHENTICATION_ROUTES),
    }
];
