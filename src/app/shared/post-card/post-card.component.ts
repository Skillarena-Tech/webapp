import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sa-post-card',
  templateUrl: './post-card.component.html',

  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() cardsList: any;
  @Output() scrollEmitter = new EventEmitter();
  public cardScrolled: any = false;

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
