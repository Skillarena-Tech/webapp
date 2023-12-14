import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'sa-post-card',
  templateUrl: './post-card.component.html',

  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnChanges {
  @Input() cardsList: any;
  @Output() scrollEmitter = new EventEmitter();
  public cardScrolled: any = false;
  public theme: any;

  constructor(private localStorageService: LocalStorageService) {
    this.theme = this.localStorageService.getLocalStorageValue();
    this.localStorageService.getLocalStorageChanges().subscribe((value) => {
      this.theme = value;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  getThemeData() {

  }
  

  onScrollList() {
    try {
      this.cardScrolled = true;
      this.scrollEmitter.emit(this.cardScrolled);
    } catch (scrollErr) {
      console.error(scrollErr);
    }
  }

  handleLike() {}

  handleComment() {}
  handleShare() {}
  handleSave() {}
}
