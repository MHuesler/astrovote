import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {
  signInForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(
    public fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService
      .signIn(this.signInForm.value)
      .subscribe((userInfo: { userId: string }) => {
        localStorage.setItem('userId', userInfo.userId)
        this.router.navigate(['/'])
      })
  }
}
