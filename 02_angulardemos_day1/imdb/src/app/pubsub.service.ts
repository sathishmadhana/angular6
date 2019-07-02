import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  subject: Subject<any> = new Subject(); 

  constructor() { }

  getPublisher() :Subject<any> { 
    return this.subject;
  }

  getSubscriber() {
    return this.subject.asObservable();
  }
}
