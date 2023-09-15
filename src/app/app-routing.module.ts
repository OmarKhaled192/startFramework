import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch:"full", title: "home"},
  {path: "home", component:HomeComponent, title:"home"},
  {path: "about", component:AboutComponent , title: "about"},
  {path: "portfolio", component:PortfolioComponent, title: "portfolio"},
  {path: "contacts", component:ContactsComponent, title: "contacts"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
