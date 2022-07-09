import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartorderComponent } from './cartorder/cartorder.component';
import { ContactComponent } from './contact/contact.component';
import { DishesComponent } from './dishes/dishes.component';
import { FooderComponent } from './fooder/fooder.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { ServiceComponent } from './service/service.component';
const routes: Routes = [
  { path:'header',component:HeaderComponent},
  
    {path:'fooder',component:FooderComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'dishes',component:DishesComponent},
    {path:'search',component:SearchComponent},
    {path:'service',component:ServiceComponent},
    {path:'cartorder',component:CartorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
