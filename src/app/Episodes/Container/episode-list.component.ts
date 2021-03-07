import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.episodeService.getAllEpisodes().subscribe((episodes) => {
      this.episodesList = episodes;
      this.sortEpisodesBySeason();
    });
    
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
    this.showedSeason=seasonNumber;
  }
}