import { Component,OnInit } from '@angular/core';
import {YoutubeService} from './YoutubeSerivce'
import {YoutubeModel} from './YoutubeModel'
import  {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 videoNameKey:string="rockbye"
 youtubeList: Observable< YoutubeModel[]>
  constructor(private youtubeService:YoutubeService) {
 
  }

ngOnInit(){
this.youtubeList=this.youtubeService.setYoutubeList(this.videoNameKey)

}

videoOnKeyUp(){
this.youtubeList=this.youtubeService.setYoutubeList(this.videoNameKey)
}
                   
  title = 'Youtube Search List';
}