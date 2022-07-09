//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooderComponent } from './fooder/fooder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { SearchComponent } from './search/search.component';
import { ServiceComponent } from './service/service.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartorderComponent } from './cartorder/cartorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DishesComponent,
    SearchComponent,
    ServiceComponent,
    CheckoutComponent,
    // CartComponent,
    CartorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
