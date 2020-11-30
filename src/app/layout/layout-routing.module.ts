import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingsComponent } from '../features/trendings/components/trendings/trendings.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'trending-movies',
        component: TrendingsComponent,
        data: { type: 'movie' },
      },

      {
        path: 'trending-tv-shows',
        component: TrendingsComponent,
        data: { type: 'tv' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
