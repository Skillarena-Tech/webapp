import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'sa-post-card',
  templateUrl: './post-card.component.html',

  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() cardsList: any;
  @Output() scrollEmitter = new EventEmitter();
  public cardScrolled: any = false;
  public isLightTheme: Boolean = false;

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
