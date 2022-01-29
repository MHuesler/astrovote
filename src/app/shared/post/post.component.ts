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

  constructor() { }

  ngOnInit(): void {
    this.rateControl.setValue(this.post.rating)
  }

  ngAfterViewInit(): void {
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "AMEX:" + this.post.ticker,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "range": "3M",
      "save_image": false,
      "studies": [
        "MASimple@tv-basicstudies"
      ],
      "container_id": "tradingview_" + this.post.id
    });
  }

}
