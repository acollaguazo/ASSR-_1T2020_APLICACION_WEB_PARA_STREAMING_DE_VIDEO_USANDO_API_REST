import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent
  },
  {
    path: "video/:id",
    component: VideoComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
