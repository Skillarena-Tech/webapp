import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { 
    localStorage.setItem('theme', 'light_theme');
  }

  ngOnInit(): void {
  }

}
