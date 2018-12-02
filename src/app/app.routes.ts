import { Routes, RouterModule, Router } from "@angular/router";

import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';

const AppRoutes: Routes = [
    //Ruta nueva que apunte a la sub rutas haciendo rutas hijas (con el router secundario)
    { 
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashBoardComponent },            
            { path: 'grafica1',  component: Grafica1Component},
            { path: '',  redirectTo: '/dashboard',pathMatch: 'full' }
        ]
     },    
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NoPageFoundComponent}
];

export const APP_ROUTER = RouterModule.forRoot( AppRoutes, { useHash: true })