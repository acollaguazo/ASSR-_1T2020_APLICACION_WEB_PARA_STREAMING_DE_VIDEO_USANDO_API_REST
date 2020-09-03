import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs'
import { Video } from '../interfaces'

const apiUrl: string = "http://localhost:3000/"

@Injectable({
  providedIn: "root",
})

export class VideoService{
  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]>{
    const url: string = `${apiUrl}videos`
    return this.http.get<Video[]>(url)
  }

  getVideo(videoId: number): Observable<Video>{
    const url: string = `${apiUrl}videos/${videoId}`
    return this.http.get<Video>(url)
  }
}
