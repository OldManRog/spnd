import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SingleValue, SingleValueResponse } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CommonServices {
  constructor() {}

  private valueSubject = new Subject<SingleValue>(); //need to create a subject

  sendUpdate(value: SingleValue) {
    //the component that wants to update something, calls this fn
    this.valueSubject.next(value); //next() will feed the value in Subject
  }

  getUpdate(): Observable<SingleValue> {
    //the receiver component calls this function
    return this.valueSubject.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
