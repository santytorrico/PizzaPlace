import { MenuService } from './menu.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {provideFirestore,getFirestore} from '@angular/fire/firestore';
import { AddPizzasComponent } from './add-pizzas/add-pizzas.component';
import { PizzasListComponent } from './pizzas-list/pizzas-list.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { RouterModule } from '@angular/router';
import { ChefViewComponent } from './chef-view/chef-view.component';
import { HomeViewComponent } from './home-view/home-view.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ProductsComponent,
    OrderSummaryComponent,
    AddPizzasComponent,
    PizzasListComponent,
    AdminViewComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarPasswordComponent,
    ProductViewComponent,
    ChefViewComponent,
    HomeViewComponent,
    WhoWeAreComponent,
    ContactoComponent,
    EquipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    CarouselModule.forRoot()
     // ToastrModule added
    // RouterModule.forRoot([
    //   { path: 'menuItems/:menuItemsName', component: ProductViewComponent},
    // ])
    
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }