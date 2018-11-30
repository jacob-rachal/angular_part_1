import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Top 2 are importing the things made by Angular...

// The lower imports are all created by us.
//import { HomeComponent } from '.home/home.component';
import { ContactComponent } from './contact/contact.component';
// Day 7; Heroes and Villans
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes= [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  //whenever we want to allow the user to go to a new page, we need to include the route here.
  { path: 'contact', component: ContactComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes/:power', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
