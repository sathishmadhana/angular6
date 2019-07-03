import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../pubsub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  websitename = "SMDb";
  loggedIn = false;
  
  constructor(private pubsub: PubSubService, private router: Router) { }

  ngOnInit() {
    this.pubsub.getLoginSubscriber().subscribe(loginResult => {
      console.log(loginResult);
      if(sessionStorage.getItem("loggedin") != null) {
        this.loggedIn = true;
      }
    })
  }  

  handleLogout() {
    sessionStorage.removeItem("loggedin");
    this.pubsub.getLoginPublisher().next("loggedout");
    this.loggedIn = false;
    this.router.navigate(['']);
  }

}
