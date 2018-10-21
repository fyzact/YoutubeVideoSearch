import   'rxjs/add/operator/map';
export class YoutubeModel{
    id:string
    title:string;
    description:string;
    thumbnail:string
  

    
  constructor(obj: Object) {
  
    this.id = obj['id']['videoId']
    this.title =obj['snippet']['title']
    this.description= obj['snippet']['description'];
    this.thumbnail = obj['snippet']['thumbnails']["default"]["url"]
  }


  static fromJSONArray(array:Array<Object>):YoutubeModel[]{
    return array.map(obj => new YoutubeModel(obj));
  }
}