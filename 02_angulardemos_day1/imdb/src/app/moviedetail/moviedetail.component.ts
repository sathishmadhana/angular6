import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../pubsub.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  movieDetails;
  constructor(private pubsubservice :PubSubService) { }

  ngOnInit() {
    this.pubsubservice.getSubscriber().subscribe( result => {
      this.movieDetails = result;
    })
  }

}
