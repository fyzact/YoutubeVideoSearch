import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { YoutubeService }from './YoutubeSerivce';
import {RouterModule,Routes} from '@angular/router';
import {videoDetailComponent} from './videoDetail';
import {menuComponent} from './menu';


const appRoutes: Routes = [
  { path: 'videoSearch', component: AppComponent },
  { path: 'details/:id', component: videoDetailComponent },
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    videoDetailComponent,
    menuComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [YoutubeService],
  bootstrap: [menuComponent]
})
export class AppModule { }
