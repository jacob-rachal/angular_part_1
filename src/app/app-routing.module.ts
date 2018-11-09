import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Top 2 are importing the things made by Angular...

// The lower imports are all created by us.
//import { HomeComponent } from '.home/home.component';
import { HomeComponent } from './home/home.component';


const routes: Routes= [
  { path: '', component: HomeComponent }
  //whenever we want to allow the user to go to a new page, we need to include the route here.

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
