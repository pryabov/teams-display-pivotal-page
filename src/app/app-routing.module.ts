import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPivotalPageComponent } from './view-pivotal-page/view-pivotal-page.component';

const routes: Routes = [
  { path: '', component: ViewPivotalPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
