import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sa-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnChanges {

  @Input() hideSideBar: any = false;
  public menusList: any = [];
  public repload: any;

  constructor(public router: Router) {
  }


  ngOnInit() {
    this.menusList = [
      {
        name: 'Home',
        key: 'home',
        route: 'app/feed',
        icon: 'home'
      },
      {
        name: 'Community',
        key: 'community',
        route: 'app/community',
        icon: 'groups'
      },
      {
        name: 'Jobs',
        key: 'jobd',
        route: 'app/jobs',
        icon: 'work'
      },
      {
        name: 'Message',
        key: 'message',
        route: 'app/message',
        icon: 'message'
      }
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['hideSideBar']) {

      }
  }

  onItemClick(eachItem: any) {
    if (eachItem.route) {
      this.router.navigate([eachItem.route], eachItem.queryParams ? { queryParams: eachItem.queryParams } : undefined);
      // if (window.innerWidth > 992) {
      //   sideMenu[0].setAttribute('style', 'display:block;');
      // } else {
      //   sideMenu[0].setAttribute('style', 'display:none;');
      // }
      return;
    }
  }
}
