import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SideCardComponent } from './side-card/side-card.component';
import { FormControl, FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    PostCardComponent,
    SideCardComponent,
    LoginModalComponent,
    LoginFormComponent,
    SignUpFormComponent,
  ],
  imports: [CommonModule, FormsModule, InfiniteScrollModule, NgbModule],
  exports: [
    NavBarComponent,
    SideBarComponent,
    PostCardComponent,
    SideCardComponent,
  ],
})
export class SharedModule {
  hello: string = 'Hello worlds';
}
