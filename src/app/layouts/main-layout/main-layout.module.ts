import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './mail-layout.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiPrimitiveTextfieldModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [ MainLayoutComponent ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiActiveZoneModule,
    TuiAvatarModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiButtonModule
  ]
})
export class MainLayoutModule { }
