import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sa-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnChanges {

  @Input() hideSideBar: any = false;
  public menusList: any = [];
  public repload: any;

  constructor() {
  }


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
        icon: 'groups'
      },
      {
        name: 'Jobs',
        key: 'jobd',
        route: '/jobs',
        icon: 'work'
      },
      {
        name: 'Message',
        key: 'message',
        route: '/message',
        icon: 'message'
      }
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['hideSideBar']) {

      }
  }
}
