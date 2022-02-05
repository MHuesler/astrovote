import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
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
