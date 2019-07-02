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

  moviedetails = [	  
    {
      name : "Harry Potter", 
      summary: 'Harry Potter is a British-American film series based on the eponymous novels by author J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films', 
      banner: 'http://t0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC'
    }
  ];

  constructor(public service: MovielistService, public pubsubservice: PubSubService) { }

  ngOnInit() {  // Will get called as soon as the UI is loaded     
    this.loading = true;
    this.service.getMovieList().subscribe(result => {
      this.movies = result;
      this.loading = false;
    });
  }

  handleClick(evt) {    
    
    //var movieName = evt.target.innerHTML;
    //var movieDetail = this.moviedetails.filter(result => result.name === movieName);
    this.pubsubservice.getPublisher().next(this.moviedetails[0]);
    
  }

}
