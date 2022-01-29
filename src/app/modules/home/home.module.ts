import { PostModule } from './../../shared/post/post.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import {TuiTagModule} from '@taiga-ui/kit';

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
    PostModule,
    TuiIslandModule,
    TuiTagModule,
    TuiButtonModule
  ]
})
export class HomeModule { }
