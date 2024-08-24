import { Route } from "@angular/router";

export const AUTHENTICATION_ROUTES: Route[] = [
    { path: 'login', loadComponent: () => import('./login/login.component').then((x) => x.LoginComponent) },
    { path: 'register', loadComponent: () => import('./register/register.component').then((x) => x.RegisterComponent) },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];