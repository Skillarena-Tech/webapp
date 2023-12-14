import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'sa-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrls: ['./jobs-card.component.scss'],
})
export class JobsCardComponent {
  public theme: any;
  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.getLocalStorageChanges().subscribe((value) => {
      this.theme = value;
    });
  }
}
