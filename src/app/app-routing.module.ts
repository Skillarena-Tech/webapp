import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { AuthGuard } from './guards/auth.guard';
import { EmptyStatePagesComponent } from './empty-state-pages/empty-state-pages.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      {
        path: 'app',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      { 
        path: 'empty-state/:type', component: EmptyStatePagesComponent 
      },
      { 
        path: '**', redirectTo: 'empty-state/404', pathMatch: 'full' 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
