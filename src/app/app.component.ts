import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public getThemeClassName: any = '';

  constructor(private localStorageService: LocalStorageService) {
    this.getThemeClassName = this.localStorageService.getLocalStorageValue();
    this.localStorageService.getLocalStorageChanges().subscribe((value) => {
    this.getThemeClassName = value;
    });
  }
  
  
}
