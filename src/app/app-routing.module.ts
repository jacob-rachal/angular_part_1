import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Top 2 are importing the things made by Angular...

// The lower imports are all created by us.
import { AmiibosComponent } from './amiibos/amiibos.component';
import { AmiiboDetailComponent } from './amiibo-detail/amiibo-detail.component';
//import { HomeComponent } from '.home/home.component';
import { ContactComponent } from './contact/contact.component';
// Day 7; Heroes and Villans
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes= [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  //whenever we want to allow the user to go to a new page, we need to include the route here.
  { path: 'contact', component: ContactComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes/:power', component: HeroesComponent },
  { path: 'hero-not-found/:no-hero', component: HeroNotFoundComponent },
  { path: 'amiibos', component: AmiibosComponent },
  { path: 'amiibo/:id', component: AmiiboDetailComponent }, //for viewing individual ones
  { path: 'amiibos/:category/:value', component: AmiibosComponent }, // for filtering (we'll do later)(done)
  // a 404 not-found page always has to go at the very end of the ROUTES.
  { path: '**', component: NotFoundComponent }// '**' represents a 'wild card' Javascript, so everything will pass.
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
