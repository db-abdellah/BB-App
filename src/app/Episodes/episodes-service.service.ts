import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Episode } from 'src/assets/episodes';

@Injectable({ providedIn: 'root' })
export class EpisodeService {
  constructor(private http: HttpClient) {}
  //Url = 'http://localhost:3000/Quotes';
  Url = 'https://breakingbadapi.com/api/episodes';

  options = {
    headers: new Headers({
      'content-type': 'application/json',
    }),
  };

  public getAllEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.Url+"?series=Breaking+Bad");
  }
  public getEpisodeById(id): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.Url+"/"+id);
  }

  ngOnInit(): void {}
}
