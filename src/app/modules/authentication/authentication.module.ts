import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [AuthenticationComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
