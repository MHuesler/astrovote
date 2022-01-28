import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { TuiRatingModule, TuiAvatarModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    TuiRatingModule,
    ReactiveFormsModule,
    TuiAvatarModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
