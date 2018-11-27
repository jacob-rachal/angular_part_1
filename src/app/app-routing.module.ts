import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Top 2 are importing the things made by Angular...

// The lower imports are all created by us.
//import { HomeComponent } from '.home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes= [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  //whenever we want to allow the user to go to a new page, we need to include the route here.
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
