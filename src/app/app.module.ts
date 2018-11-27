import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //included on 11/8/2018. Is a part of double-model binding.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    ContactComponent,
    AlphabeticalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
