import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  public hideSideBar: any = false;
  public cardsList: any = [];

  ngOnInit(): void {
    this.cardsList = [
      {
        name: "post1",
        id: 'post0001',
        photos: []
      },
      {
        name: "post2",
        id: 'post0001',
        photos: []
      },
      {
        name: "post3",
        id: 'post0001',
        photos: []
      },
      {
        name: "post",
        id: 'post0001',
        photos: []
      }
    ]
  }

  postScrollEvent(event: any) {
    try {
      this.hideSideBar = event;
    } catch (scrollEvent) {
      console.error()
    }
  }
}
