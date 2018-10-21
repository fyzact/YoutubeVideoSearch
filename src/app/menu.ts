import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<nav>
      <a routerLink="/videoSearch" routerLinkActive="active">Video Arama</a>
    </nav> <router-outlet></router-outlet>`
    
})

export class menuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}