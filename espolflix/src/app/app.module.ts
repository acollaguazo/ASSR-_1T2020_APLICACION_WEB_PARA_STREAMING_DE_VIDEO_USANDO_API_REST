import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
