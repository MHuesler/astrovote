import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { BackendService } from './../../services/backend.service';
import { AfterViewInit, Component, Inject, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SignInComponent } from 'src/app/modules/authentication/sign-in/sign-in.component';
import { TuiDialogService } from '@taiga-ui/core';

const winAny: any = window
declare const TradingView: any

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit {

  rateControl = new FormControl(0)
  @Input() post: any
  chartId = ''

  private readonly signInDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(SignInComponent, this.injector),
    {
      dismissible: true,
      label: 'Sign in to rate posts',
    },
  )

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private backend: BackendService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.chartId = `tradingview_${this.post.id}_${Math.floor(Math.random() * 9999)}`
    this.rateControl.setValue(this.post.userRating)

    this.rateControl.valueChanges
      .subscribe((rating) => {
        if (!this.authService.getAuthStatus()) {
          this.rateControl.setValue(0, { emitEvent: false })
          this.signInDialog.subscribe({
            next: data => {
              console.info('Dialog emitted data = ' + data)
            },
            complete: () => {
              console.info('Dialog closed')
            },
          })
          return
        }

        if (this.post.userRating === rating) {
          this.backend.deleteVote(this.post.id)
            .subscribe((res: any) => {
              this.post.rating = res.rating
              this.post.userRating = 0
            })
        } else {
          (this.post.userRating === 0
            ? this.backend.createVote(this.post.id, rating)
            : this.backend.updateVote(this.post.id, rating)
          ).subscribe((res: any) => {
            this.post.rating = res.rating
            this.post.userRating = rating
          })
        }
      })
  }

  ngAfterViewInit(): void {
    new TradingView.widget({
      autosize: true,
      symbol: this.post.ticker,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      range: '3M',
      save_image: false,
      studies: [
        'MASimple@tv-basicstudies'
      ],
      container_id: this.chartId
    })
  }

}
