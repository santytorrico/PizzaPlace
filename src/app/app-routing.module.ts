import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
// import { ProductsComponent } from './products/products.component';
import { AddPizzasComponent } from './add-pizzas/add-pizzas.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  // {path:"Products", component:ProductsComponent},
  {path:"OrderSummary", component:OrderSummaryComponent},
  {path:"Admin", component:AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

