import { Router } from '@angular/router';
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
    private fb: FormBuilder
    ) {
    this.authService.refreshUser()
  }

  ngOnInit(): void {

  }

  onSearchSubmit(): void {
    this.router.navigate([`/search`], { queryParams: { q: this.searchForm.controls.searchQuery.value } })
  }

}
