import { Injectable } from '@angular/core';
import {YoutubeModel} from './YoutubeModel'
import { Http,Response } from '@angular/http';
import   'rxjs/add/operator/map';
import  {Observable} from 'rxjs/Observable';
import   'rxjs/add/operator/toPromise';


@Injectable()
export class YoutubeService {
 
    constructor(private http:Http) {
      
    }
 youtubeList:  YoutubeModel[]
 youtubeApiKey:'AIzaSyDtoMsyAdeURGJ5s-bU2412OHmzIH32sUY'
youtubeDefaultUrl:"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="


    setYoutubeList(key:string) {

         var formedUrl =  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + key + '&type=video&&key=AIzaSyDtoMsyAdeURGJ5s-bU2412OHmzIH32sUY';

  return   this.http.get(formedUrl)
    .map(res => this.youtubeList= <YoutubeModel[]> YoutubeModel.fromJSONArray(res.json().items));
//  this.http.get(formedUrl).toPromise().then(function(response){
// console.log( response.json().items.length)
// for(var i=0; response.json().items.length>i; i++ ){
//     this.youtubeList.push(new YoutubeModel(response.json().items[i]))
// }
// });


    // return this.http.get(formedUrl).map(p=>p.json)
// .subscribe(
//     function(response) { console.log("Success Response" + response)},
//     function(error) { console.log("Error happened" + error)},
//     function() { console.log("the subscription is completed")}
// );
  
    }
}