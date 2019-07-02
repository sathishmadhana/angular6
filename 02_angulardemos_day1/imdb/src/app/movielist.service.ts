import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {


  constructor(public httpClient: HttpClient) { 
    console.log("MovieListService Instantiated...");
  }

  getMovieList(): Observable<any>{
    return this.httpClient.get("http://www.mocky.io/v2/5d1b11233400004c000004ae?mocky-delay=3000ms");
  }


}
