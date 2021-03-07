import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EpisodeComponent } from '../Components/episode.component';
import { EpisodeListComponent } from '../Container/episode-list.component';
import { EpisodeService } from '../episodes-service.service';


@NgModule({
    imports: [BrowserModule,CommonModule,HttpClientModule],
    exports: [],
    declarations: [EpisodeListComponent,EpisodeComponent,],
    providers: [EpisodeService],
})

export class EpisodeModule { }
