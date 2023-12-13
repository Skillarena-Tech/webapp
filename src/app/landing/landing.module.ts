import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { AppsComponent } from './apps/apps.component';
import { SharedModule } from './../shared/shared.module'
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs/jobs.component';
import { CommunityComponent } from './community/community.component';


@NgModule({
  declarations: [
    LandingComponent,
    AppsComponent,
    HomeComponent,
    JobsComponent,
    CommunityComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }
