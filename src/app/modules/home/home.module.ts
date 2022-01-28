import { PostModule } from './../../shared/post/post.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TuiTextfieldControllerModule,
    TuiPrimitiveTextfieldModule,
    PostModule
  ]
})
export class HomeModule { }
