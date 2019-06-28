import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
