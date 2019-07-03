import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../pubsub.service';
import { MoviedetailsService } from '../moviedetails.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  movieDetails;
  constructor(private pubsubservice :PubSubService, private moveDetailService: MoviedetailsService) { }

  ngOnInit() {
    this.pubsubservice.getSubscriber().subscribe((movieName) => {
      this.moveDetailService.getMovie(movieName).subscribe(result => {
        this.movieDetails = result;
      })      
    })
  }

}
