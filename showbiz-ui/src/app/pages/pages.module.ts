import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports:[HomeComponent]
})
export class PagesModule { }
