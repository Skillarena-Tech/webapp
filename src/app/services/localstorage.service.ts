import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageSubject = new Subject<string>();

  constructor() {
    // Listen for changes in localStorage
    window.addEventListener('storage', (event: any) => {
    //   if (event.key === 'theme') {
    //     this.storageSubject.next(event.newValue);
    //   }
      this.storageSubject.next(this.getLocalStorageValue());
      
    });
  }

  // Function to get the value from localStorage
  getLocalStorageValue(): string {
    return localStorage.getItem('theme') || '';
  }

  // Observable to subscribe to changes
  getLocalStorageChanges(): Observable<string> {
    return this.storageSubject.asObservable();
  }
}
