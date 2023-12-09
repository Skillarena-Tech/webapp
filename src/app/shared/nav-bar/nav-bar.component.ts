import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sa-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public theme: any;
  public myData: any;
  public iconsList: any= [];

  constructor() {
    
  }

  ngOnInit() {
    this.iconsList = [
      { name: 'Message',
        action: 'message',
        icon: 'message',
        tooltip: 'Message to connection'
      },
      { name: 'Notification',
        action: 'notification',
        icon: 'notifications',
        tooltip: 'Notification'
      },
      { name: 'Theme',
        action: 'theme',
        icon: {
          light_theme: 'dark_mode',
          dark_theme: 'light_mode'
        },
        tooltip: 'Theme'
      }
    ]
  }

  setTheme() {
    try {
      this.theme = localStorage.getItem('theme');
      if (this.theme === 'light_theme') {
        localStorage.setItem('theme', 'dark_theme');
      } else {
        localStorage.setItem('theme', 'light_theme');
      }
      window.dispatchEvent(new Event("storage"));
      this.getLogoImg();
    } catch(error) {
      console.error(error)
    }
  }

  iconsClicked(selectedIcon: any) {
    try {
      if (selectedIcon.action === 'theme') {
        this.setTheme();
      }
    } catch(iconsErr) {
      console.error(iconsErr);
    }
  }

  getLogoImg() {
    try {
      if (this.theme === 'light_theme') {
        return 'assets/images/light-theme-logo.png';
      } else {
        return 'assets/images/dark-theme-logo.png';
      }
    } catch (logoErr) {
      console.error(logoErr)
      return;
    }
  }
}
