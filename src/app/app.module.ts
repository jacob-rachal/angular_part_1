import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //included on 11/8/2018. Is a part of double-model binding.
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { AmiibosComponent } from './amiibos/amiibos.component';
import { AmiiboDetailComponent } from './amiibo-detail/amiibo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    ContactComponent,
    AlphabeticalPipe,
    ReversePipe,
    HeroesComponent,
    HeroDetailComponent,
    NotFoundComponent,
    HeroNotFoundComponent,
    AmiibosComponent,
    AmiiboDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
