import { HttpClient } from '@angular/common/http';
import { BackendService } from './../../../services/backend.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import {
  delay,
  filter,
  startWith,
  switchMap,
  debounceTime,
  map,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

class Equity {
  constructor(readonly symbol: string, readonly name: string) {}

  toString(): string {
    return `${this.symbol}`;
  }
}

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  postForm = this.fb.group({
    ticker: [''],
    analysis: [''],
  })

  readonly search$ = new Subject<string>();

  readonly tickers$: Observable<ReadonlyArray<Equity> | null> =
    this.search$.pipe(
      debounceTime(300),
      filter((value) => value !== null),
      switchMap((search) =>
        (
          this.searchSymbol(search).pipe(map((matches) =>
            matches.map((match) => {
              return new Equity(match.symbol, match.name)
            })
          )) as Observable<ReadonlyArray<Equity>>
        ).pipe(startWith<ReadonlyArray<Equity> | null>(null))
      )
    )

  constructor(
    private fb: FormBuilder,
    private backend: BackendService,
    private http: HttpClient,
    @Inject(POLYMORPHEUS_CONTEXT)
    private context: TuiDialogContext<number, number>
  ) {}

  ngOnInit(): void {}

  onSearchChange(searchQuery: string | null): void {
    if (searchQuery == null) return;
    this.search$.next(searchQuery);
  }

  onSubmit(): void {
    this.backend.createPost({ ...this.postForm.value, ticker: this.postForm.controls.ticker.value.symbol }).subscribe(() => this.context.completeWith(0))
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

