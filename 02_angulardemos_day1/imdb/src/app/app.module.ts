import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { routes } from './router';
import { SelectionhighlighterDirective } from './selectionhighlighter.directive';
import { CurrencyconvertorPipe } from './currencyconvertor.pipe';
import { CrmModule } from './crm/crm.module';

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
    Oops404pageComponent,
    LoginpageComponent,
    SignuppageComponent,
    SelectionhighlighterDirective,
    CurrencyconvertorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CrmModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
