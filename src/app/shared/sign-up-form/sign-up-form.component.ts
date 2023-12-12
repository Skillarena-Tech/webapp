import { Component, Input } from '@angular/core';

@Component({
  selector: 'sa-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  passwordVisibility: Boolean = false;
  @Input() showLoginForm!: () => void;
  passwordVisible() {
    this.passwordVisibility = !this.passwordVisibility;
  }
}
