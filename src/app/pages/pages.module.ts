import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        AdminComponent,
        PagesComponent
    ],
    exports:[
        AdminComponent,
        PagesComponent
    ],
    imports:[
        PagesRoutes
    ]
})
export class PagesModule{}