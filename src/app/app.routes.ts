import { LoginComponent } from './pages/login/login.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { SomosComponent } from './pages/somos/somos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from "@angular/router";
const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'quienessomos', component: SomosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
]
export const APP_ROUTES = RouterModule.forRoot(APPROUTES, { useHash: true });