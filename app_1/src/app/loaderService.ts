import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable(); // Make sure to expose this

  constructor() {
    console.log('LoaderService created');
  }

  show() {
    console.log('LoaderService.show() called');
    this.loadingSubject.next(true);
  }

  hide() {
    console.log('LoaderService.hide() called');
    this.loadingSubject.next(false);
  }
}
