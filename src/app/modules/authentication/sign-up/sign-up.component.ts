import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  accountDetailsForm = this.fb.group({
    userName: ['', [Validators.required]],
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService
      .signUp(this.accountDetailsForm.value)
      .subscribe(() =>
        this.authService
        .signIn(this.accountDetailsForm.value)
        .subscribe((userInfo: { userId: string }) => {
          localStorage.setItem('userId', userInfo.userId)
          this.authService.currentUser.next(userInfo)
          this.router.navigate([''])
        }))
  }
}
