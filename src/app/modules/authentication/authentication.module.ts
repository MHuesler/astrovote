import { TuiFieldErrorModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslationsModule } from 'src/app/shared/translations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'signin' },
      { path: 'signin', pathMatch: 'full', component: SignInComponent },
      { path: 'signup', pathMatch: 'full', component: SignUpComponent },
    ],
  },
]

@NgModule({
  declarations: [AuthLayoutComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    TuiFieldErrorModule,
    TuiInputPasswordModule,
    TranslationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule
  ]
})
export class AuthenticationModule { }
