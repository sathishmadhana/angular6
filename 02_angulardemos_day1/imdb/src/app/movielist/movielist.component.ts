import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies;

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {  // Will get called as soon as the UI is loaded
    this.httpClient.get("http://www.mocky.io/v2/5d1b11233400004c000004ae?mocky-delay=3000ms")
    .subscribe(
      result => this.movies = result
    );
  }

  handleClick(evt) {
    console.log("I am clicked");
    console.log(evt.target.innerHTML);
  }

}
