import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  searchForm = this.fb.group({
    searchQuery: ['']
  })

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
    ) {
    this.authService.refreshUser()
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => { this.searchForm.controls.searchQuery.setValue(params.q) })
  }

  onSearchSubmit(): void {
    this.router.navigate([`/search`], { queryParams: { q: this.searchForm.controls.searchQuery.value } })
  }

}
