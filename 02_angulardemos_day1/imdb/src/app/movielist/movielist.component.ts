import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies;
  loading = false;

  constructor(public service: MovielistService) { }

  ngOnInit() {  // Will get called as soon as the UI is loaded     
    this.loading = true;
    this.service.getMovieList().subscribe(result => {
      this.movies = result;
      this.loading = false;
    });
  }

  handleClick(evt) {
    console.log("I am clicked");
    console.log(evt.target.innerHTML);
  }

}
