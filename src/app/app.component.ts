import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'astrovote'
  constructor(
    private translate: TranslateService,
    private spinner: NgxSpinnerService
  ) {
    translate.setDefaultLang('en')
    this.spinner.show()
  }
}
