import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/assets/quotes';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/assets/characters';

@Injectable({ providedIn: 'root' })



export class CharacterService {

  
  constructor(private http: HttpClient) {}
  //Url = 'http://localhost:3000/Characters';
  Url = 'https://breakingbadapi.com/api/characters';
  
  options = {
    headers: new Headers({
      'content-type': 'application/json',
    }),
  };

  public getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.Url+"?category=Breaking+Bad");
  }
  public getCharacterById(id): Observable<Character[]> {
    return this.http.get<Character[]>(this.Url+"/"+id);
  }
  public getCharacterByName(name:string): Observable<Character[]> {
    return this.http.get<Character[]>(this.Url+"?name="+name.replace(" ","+"));
  }

  ngOnInit(): void {};
}
