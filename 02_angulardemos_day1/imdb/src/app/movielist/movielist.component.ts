import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies = [
    {name : "Harry Potter", writer: 'J.K. Rowling', genre: 'Thriller', year: 2012 },
    {name : "James Bond", writer: 'Ian Fleming', genre: 'Action', year: 1998 },
    {name : "Sherlock Holmes", writer: 'Arthur Conan Doyle', genre: 'Suspense', year: 1880 },
  ];

  constructor() { }

  ngOnInit() {
  }

  handleClick(evt) {
    console.log("I am clicked");
    console.log(evt.target.innerHTML);
  }

}
