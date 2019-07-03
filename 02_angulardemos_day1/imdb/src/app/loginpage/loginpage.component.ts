import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PubSubService } from '../pubsub.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private pubsub: PubSubService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log('Username : '+this.username);
    console.log('Password : '+this.password);

    // store the date in the storage so thers can view or share 
    sessionStorage.setItem("loggedin", "true");

    // sent the events to everyone who wish to monitor that you are logged in successfully
    this.pubsub.getLoginPublisher().next({ "status": "logged", "tokenid": "22784758745"})
    this.router.navigate(['']);
  }  

}
