import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthfilterGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log("Printing State ",state);
    console.log("Printing next ", next);
    console.log("Printing attempted url ", state.url );

    if(sessionStorage.getItem("loggedin") != null) {
      return true;
    } else {
      this.router.navigate(['login']);
    }

  }
}
