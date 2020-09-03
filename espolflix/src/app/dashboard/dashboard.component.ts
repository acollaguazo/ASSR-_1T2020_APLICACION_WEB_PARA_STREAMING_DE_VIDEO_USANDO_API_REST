import { Component, OnInit } from '@angular/core';
import { Video } from 'src/core/interfaces';
import { VideoService } from 'src/core/services/video-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  videos: Video[]

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(
      result => {
        this.videos = result
      }
    )

  }

}




















