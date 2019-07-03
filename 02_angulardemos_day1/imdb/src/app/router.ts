import { HomepageComponent } from "./homepage/homepage.component";
import { MoviespageComponent } from "./moviespage/moviespage.component";
import { AuthfilterGuard } from "./authfilter.guard";
import { TelevisionpageComponent } from "./televisionpage/televisionpage.component";
import { EventspageComponent } from "./eventspage/eventspage.component";
import { SignuppageComponent } from "./signuppage/signuppage.component";
import { Oops404pageComponent } from "./oops404page/oops404page.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { Routes } from "@angular/router"

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'movies', component: MoviespageComponent, canActivate:[AuthfilterGuard] },
    { path: 'television', component: TelevisionpageComponent },
    { path: 'events', component: EventspageComponent },
    { path: 'login', component: LoginpageComponent },
    { path: 'signup', component: SignuppageComponent },
    { path: '**', component: Oops404pageComponent }
  ]