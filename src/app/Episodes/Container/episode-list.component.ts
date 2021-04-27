import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Episode, Season } from 'src/assets/episodes';
import { EpisodeService } from '../episodes-service.service';

@Component({
  selector: 'episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  constructor(private episodeService: EpisodeService) {}
  public episodesList: Episode[];
  public seasons: Season[] = [];
  public showedSeason:number=1;
  public episodeSubscription$: Subscription;
  public selectedSeason ;


  ngOnInit() {
    this.episodeSubscription$=this.episodeService.getAllEpisodes().subscribe((episodes) => {
      this.episodesList = episodes;
      this.sortEpisodesBySeason();
      this.selectedSeason = this.seasons[0].number;

    },this.logError);
    
  }
  sortEpisodesBySeason() {
    for (let i = 1; i <= 5; i++) {
      this.seasons.push({
        number: i,
        episodes: this.episodesList.filter(
          (episode) => episode.season == i.toString() ||episode.season ==  " "+i.toString()
        ),
      });
    }
  }

  showSeason(seasonNumber:number){
    if(seasonNumber == this.selectedSeason){
      this.selectedSeason=0;
      return;
    }
    this.selectedSeason=seasonNumber;
  }
  ngOnDestroy() {
    this.episodeSubscription$.unsubscribe();
  }
  logError = (error: HttpErrorResponse) => console.error(error);

}
