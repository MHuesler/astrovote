import { BackendService } from './../../services/backend.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

declare const TradingView: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit {

  rateControl = new FormControl(0);
  @Input() post: any;

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit(): void {
    this.rateControl.setValue(this.post.userRating)

    this.rateControl.valueChanges
      .subscribe((rating) => {
        if (this.post.userRating == rating) {
          this.backend.deleteVote(this.post.id)
            .subscribe((res: any) => {
              this.post.rating = res.rating;
              this.post.userRating = 0;
            })
        } else {
          (this.post.userRating == 0
            ? this.backend.createVote(this.post.id, rating)
            : this.backend.updateVote(this.post.id, rating)
          ).subscribe((res: any) => {
            this.post.rating = res.rating;
            this.post.userRating = rating;
          });
        }
      });
  }

  ngAfterViewInit(): void {
    new TradingView.widget({
      'autosize': true,
      'symbol': this.post.ticker,
      'interval': 'D',
      'timezone': 'Etc/UTC',
      'theme': 'light',
      'style': '1',
      'locale': 'en',
      'toolbar_bg': '#f1f3f6',
      'enable_publishing': false,
      'hide_top_toolbar': true,
      'hide_legend': true,
      'range': '3M',
      'save_image': false,
      'studies': [
        'MASimple@tv-basicstudies'
      ],
      'container_id': `tradingview_${this.post.id}`
    });
  }

}
