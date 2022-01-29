import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { TuiRatingModule, TuiAvatarModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiBadgeModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    TuiRatingModule,
    ReactiveFormsModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiBadgeModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
