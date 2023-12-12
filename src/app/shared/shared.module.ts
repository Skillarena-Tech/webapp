import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SideCardComponent } from './side-card/side-card.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  NgbModule,
  NgbDropdownModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    PostCardComponent,
    SideCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    NgbModule,
    NgbDropdownModule,
    NgbPopoverModule,
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    PostCardComponent,
    SideCardComponent,
  ],
})
export class SharedModule {
  
}
