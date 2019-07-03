import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { TelevisionpageComponent } from './televisionpage/televisionpage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { Oops404pageComponent } from './oops404page/oops404page.component';

//TODO: move this to a seperate file
const routes = [
  { path: '', component: HomepageComponent },
  { path: 'movies', component: MoviespageComponent },
  { path: 'television', component: TelevisionpageComponent },
  { path: 'events', component: EventspageComponent },
  { path: '**', component: Oops404pageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainlayoutComponent,
    MovielistComponent,
    MoviedetailComponent,
    HomepageComponent,
    MoviespageComponent,
    TelevisionpageComponent,
    EventspageComponent,
    Oops404pageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
