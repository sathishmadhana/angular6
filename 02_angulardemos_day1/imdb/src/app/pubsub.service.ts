import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  subject: Subject<any> = new Subject(); 
  //subject: BehaviorSubject<any> =  new BehaviorSubject<any>("Harry Potter");
  // loginSubject: Subject<any> = new Subject<any>();
  loginSubject: BehaviorSubject<any> = new BehaviorSubject<any>(""); //change to beahaviour retains the session in this case.

  constructor() { }

  getPublisher() :Subject<any> { 
    return this.subject;
  }

  getSubscriber() {
    return this.subject.asObservable();
  }

  getLoginPublisher() : Subject<any> { 
    return this.loginSubject;
  }

  getLoginSubscriber() : Observable<any> {
    return this.loginSubject.asObservable();
  }
}
