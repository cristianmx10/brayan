import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './pages.component';
import { Routes } from '@angular/router';

const PAGESROUTES : Routes = [
    {
        path: '',
        component: PagesComponent,
        children:[
            {path: 'admin',component: AdminComponent},
            { path: '', redirectTo: '/admin', pathMatch: 'full' },
        ]
    },
];
export const PagesRoutes = RouterModule.forRoot(PAGESROUTES);