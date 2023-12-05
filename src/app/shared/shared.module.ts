import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SideCardComponent } from './side-card/side-card.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    PostCardComponent,
    SideCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    PostCardComponent,
    SideCardComponent
  ],
})
export class SharedModule { }
