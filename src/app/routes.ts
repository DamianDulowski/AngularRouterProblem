import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then((c) => c.LoginComponent)
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/navigation/navigation.component').then((c) => c.NavigationComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./components/home/home.component').then((c) => c.HomeComponent)
            }
        ]
    },
    {
        path: 'documents',
        loadComponent: () => import('./components/navigation/navigation.component').then((c) => c.NavigationComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./components/documents/documents.component').then((c) => c.DocumentsComponent)
            }
        ]
    }
];