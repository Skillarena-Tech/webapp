import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { AppsComponent } from './apps/apps.component';


@NgModule({
  declarations: [
    LandingComponent,
    AppsComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }
