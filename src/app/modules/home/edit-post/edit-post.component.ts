import { BackendService } from './../../../services/backend.service';
import { Component, OnInit } from '@angular/core';
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
          this.backend.searchSymbol(search).pipe(map((matches) =>
            matches.map((match) => {
              return new Equity(match.symbol, match.name)
            })
          )) as Observable<ReadonlyArray<Equity>>
        ).pipe(startWith<ReadonlyArray<Equity> | null>(null))
      )
    )

  constructor(private fb: FormBuilder, private backend: BackendService) {}

  ngOnInit(): void {}

  onSearchChange(searchQuery: string | null): void {
    if (searchQuery == null) return;
    this.search$.next(searchQuery);
  }

  onSubmit(): void {

  }
}
