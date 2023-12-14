import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'sa-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  public hideSideBar: any;
  public theme: any;

  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.getLocalStorageChanges().subscribe((value) => {
      this.theme = value;
    });
  }
}
