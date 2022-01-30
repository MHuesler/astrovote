import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  baseUrl = 'https://localhost:4100'

  constructor(private http: HttpClient) {}

  createPost(post: {ticker: string, analysis: string}): Observable<null> {
    return this.http.post<null>(`${this.baseUrl}/post`, post)
  }

  searchSymbol(keywords: string): Observable<any[]> {
    return this.http
      .get<any[]>(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${environment.alphavantageApiKey}`
      )
      .pipe(map((res: any) => res.bestMatches))
      .pipe(
        map((matches) =>
          matches.map((match: any) => {
            return { symbol: match['1. symbol'], name: match['2. name'] }
          })
        )
      )
  }
}
