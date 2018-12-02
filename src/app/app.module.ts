import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTER } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashBoardComponent,
    ProgressComponent,
    Grafica1Component,
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
