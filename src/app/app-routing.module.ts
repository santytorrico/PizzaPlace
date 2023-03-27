import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"Products", component:ProductsComponent},
  {path:"OrderSummary", component:OrderSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
