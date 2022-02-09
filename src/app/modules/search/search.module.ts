import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiDataListModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { PostModule } from 'src/app/shared/post/post.module';
import { TuiComboBoxModule, TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiTagModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';

export const routes: Routes = [
  { path: '', component: SearchComponent },
]

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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

export class SearchModule { }
