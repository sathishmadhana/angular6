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
    },
    {
      name : "James Bond", 
      summary: 'The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Flemings death in 1964, eight other authors have written authorised Bond novels', 
      banner: 'https://i.pinimg.com/originals/12/16/fd/1216fd4c59380dd8f5c2f3b0e8b4631d.jpg'
    },
    {
      name : "Sherlock Holmes", 
      summary: 'Sherlock Holmes is a 2009 mystery period action film based on the character of the same name created by Sir Arthur Conan Doyle. The film was directed by Guy Ritchie and produced by Joel Silver, Lionel Wigram, Susan Downey, and Dan Lin. The screenplay, by Michael Robert Johnson, Anthony Peckham, and Simon Kinberg, was developed from a story by Wigram and Johnson', 
      banner: 'https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg'
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
    
    var movieName = evt.target.innerHTML;
    //var movieDetail = this.moviedetails.filter(result => result.name === movieName);

    var movieDetail = this.moviedetails.find(item => item.name === movieName);
    this.pubsubservice.getPublisher().next(movieDetail);
    
  }

}
