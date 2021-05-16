import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CartComponent} from './cart/cart.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CountriesComponent } from './countries/countries.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'mobile',component:MobileComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'electronic',component:ElectronicComponent},
    {path:'',redirectTo:'/products/mobile',pathMatch:'full'},
  ]},
  {path:'cart',component:CartComponent},
  {path:'countries',component:CountriesComponent},
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
