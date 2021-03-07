import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/assets/quotes';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })



export class QuoteService {

  
  constructor(private http: HttpClient) {}
  //Url = 'http://localhost:3000/Quotes';
  Url = 'https://breakingbadapi.com/api/quotes?series=Breaking+Bad';
  
  options = {
    headers: new Headers({
      'content-type': 'application/json',
    }),
  };

  public getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.Url);
  }

  ngOnInit(): void {};
}
