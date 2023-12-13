import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sa-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  private modalService = inject(NgbModal);
  signUpForm: Boolean = false;
  open(loginModal: TemplateRef<any>) {
    this.modalService.open(loginModal, { ariaLabelledBy: 'modal-basic-title' });
  }

  showLoginForm = () => {
    this.signUpForm = false;
  };
  showSignUpForm = () => {
    this.signUpForm = true;
  };
}
