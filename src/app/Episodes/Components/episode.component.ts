import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/assets/episodes';
import { EpisodeService } from '../episodes-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'episode-component',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  constructor(
    private episodeService: EpisodeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  public episode:Episode[]=[] as Episode[];
  ngOnInit() :void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.episodeService.getEpisodeById(id).subscribe(
        (result)=>{
            this.episode=result;
            console.log(this.episode)
        }
    ),this.logError;
  }
  goBack(){
    this.location.back();
  }
  logError = (error: HttpErrorResponse) => console.error(error);

}
