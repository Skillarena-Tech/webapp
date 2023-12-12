import { Component, Input, TemplateRef, inject, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sa-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.scss'],
})
export class SideCardComponent implements OnInit {
  private modalService = inject(NgbModal);
  closeResult = '';
  @Input() menuList: any = [];
  isLightTheme: Boolean = false;

  ngOnInit(): void {}

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
