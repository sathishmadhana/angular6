import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovielistService } from '../movielist.service';
import { PubSubService } from '../pubsub.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies;
  loading = false;  

  constructor(public service: MovielistService, public pubsubservice: PubSubService) { }

  ngOnInit() {  // Will get called as soon as the UI is loaded     
    this.loading = true;
    this.service.getMovieList().subscribe(result => {
      this.movies = result;
      this.loading = false;
    });
  }

  handleClick(evt) {        
    var movieName = evt.target.innerHTML;    
    this.pubsubservice.getPublisher().next(movieName);    
  }  

}
