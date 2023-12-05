import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public menusList: any = [];
  public repload: any;


  ngOnInit() {
    this.menusList = [
      {
        name: 'Home',
        key: 'home',
        route: '/home',
        icon: 'home'
      },
      {
        name: 'Community',
        key: 'community',
        route: '/community',
        icon: 'community'
      },
      {
        name: 'Jobs',
        key: 'jobd',
        route: '/jobs',
        icon: 'job'
      },
      {
        name: 'Message',
        key: 'message',
        route: '/message',
        icon: 'message'
      }
    ]
  }

}
