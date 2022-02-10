import { BackendService } from 'src/app/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filter = new FormControl('top')

  searchQuery = "";

  constructor(
    public backend: BackendService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.backend.posts.pipe(take(1)).subscribe(() => setTimeout(() => this.spinner.hide(), 1000))

    this.route.queryParams.subscribe(params => {
      this.searchQuery = params.q;
      this.backend.searchPosts(this.searchQuery)
    })

    this.filter.valueChanges
    .subscribe((val) => {
      switch(val) {
        case 'top': this.backend.searchPosts(this.searchQuery); break;
        case 'new': this.backend.searchPosts(this.searchQuery, "new"); break;
      }
    })
  }

}
