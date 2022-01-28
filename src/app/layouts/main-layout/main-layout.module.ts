import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './mail-layout.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDataListModule, TuiHostedDropdownModule, TuiSvgModule } from '@taiga-ui/core';
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
    TuiAvatarModule
  ]
})
export class MainLayoutModule { }
