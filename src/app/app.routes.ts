import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path:'login',loadComponent:()=>import('./components/login/login.component').then((com)=>com.LoginComponent)
  },
  {
    path:'register',loadComponent:()=>import('./components/register/register.component').then((com)=>com.RegisterComponent)
  },
  {
    path:'dashboard',loadComponent:()=>import('./page/dashboard/dashboard.component').then((com)=>com.DashboardComponent)
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'**',redirectTo:"home",pathMatch:'full'
  },


];
