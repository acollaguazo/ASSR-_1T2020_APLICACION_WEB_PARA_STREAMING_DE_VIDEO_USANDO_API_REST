import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/core/services/video-service.service';
import { Video } from 'src/core/interfaces';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoId: number
  video: Video
  safeUrl: SafeUrl

  constructor(private activatedRouter: ActivatedRoute, private sanitizer: DomSanitizer, private _videoService: VideoService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      const param = "id"
      this.videoId = params[param]
    })
    this._videoService.getVideo(this.videoId).subscribe((response) => {
      this.video = response[0]
      console.log(this.video)
      //this.video.date = new Date()
      this.getUrl(this.video.url)
    })
  }

  getUrl(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
