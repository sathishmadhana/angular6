import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  cities = [];
  constructor() { }

  ngOnInit() {
    let localcities = localStorage.getItem("cities");
    if(!localcities){
      //localStorage.setItem("cities", atob(mypayload))  //TODO: local storage example, implement later
    } else {
      //this.cities = localcities;
    }
  }

}
