import { Component, Input } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'sa-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  passwordVisibility: Boolean = false;
  @Input()
  showSignUpForm!: () => void;

  passwordVisible() {
    this.passwordVisibility = !this.passwordVisibility;
  }
}
