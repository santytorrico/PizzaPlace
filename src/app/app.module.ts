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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ProductViewComponent } from './product-view/product-view.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrderSummaryComponent,
    AddPizzasComponent,
    PizzasListComponent,
    AdminViewComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarPasswordComponent,
    ProductViewComponent,
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
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }