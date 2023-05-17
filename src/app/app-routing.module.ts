import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductsComponent } from './products/products.component';
import { AddPizzasComponent } from './add-pizzas/add-pizzas.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ChefViewComponent } from './chef-view/chef-view.component';
import { HomeViewComponent } from './home-view/home-view.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: "/Products" },
  //{path:"Products", component:ProductsComponent, ...canActivate(()=> redirectUnauthorizedTo(['/Login']))},
  {path:"Products", component:ProductsComponent},
  {path:"OrderSummary", component:OrderSummaryComponent},
  {path:"Admin", component:AdminViewComponent},
  {path:"Register", component:RegisterComponent},
  {path:"Login", component:LoginComponent},
  {path:"Forgot", component:RecuperarPasswordComponent},
  {path:"ChefView", component:ChefViewComponent},
  {path: "ProductDetail/:id", component:ProductViewComponent},
  {path:"ChefView", component:ChefViewComponent},
  {path: "Home-View", component:HomeViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

