import { PostModule } from './../../shared/post/post.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import {TuiTagModule} from '@taiga-ui/kit';
import { EditPostComponent } from './edit-post/edit-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiComboBoxModule, TuiDataListWrapperModule} from '@taiga-ui/kit';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiTextAreaModule} from '@taiga-ui/kit';

export const routes: Routes = [
  { path: '', component: HomeComponent },
]


@NgModule({
  declarations: [HomeComponent, EditPostComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TuiTextfieldControllerModule,
    TuiPrimitiveTextfieldModule,
    PostModule,
    TuiIslandModule,
    TuiTagModule,
    TuiButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiAutoFocusModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDataListModule,
    TuiTextAreaModule
  ]
})
export class HomeModule { }
