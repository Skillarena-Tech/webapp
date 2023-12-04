import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { AppsComponent } from './apps/apps.component';
import { SharedModule } from './../shared/shared.module'
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    LandingComponent,
    AppsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }
