import { Component, OnInit,OnDestroy  } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import {DomSanitizer, SafeResourceUrl} from     "@angular/platform-browser";

@Component({
 
    selector: 'veri',
    template: `<br/>'
     <iframe width="560" height="315" [src]="this.safeUrl" frameborder="0" allowfullscreen></iframe> `
})

export class videoDetailComponent implements OnInit {

    safeUrl:SafeResourceUrl;

 
    constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer) { }
    videoId:string
    videoUrl:string="https://www.youtube.com/embed/"
    ngOnInit() {

     this.route.params.subscribe(params => {
       this.videoId = params['id']; // (+) converts string 'id' to a number
       this.videoUrl+=this.videoId;
       this.safeUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    });

    
    
     }
}