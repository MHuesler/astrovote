import { HomeModule } from './../../modules/home/home.module';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainLayoutComponent } from './main-layout.component'

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../modules/home/home.module').then(
            (m) => m.HomeModule
          )
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../../modules/search/search.module').then(
            (m) => m.SearchModule
          )
      }
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
