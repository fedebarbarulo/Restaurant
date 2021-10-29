import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenupostresPage } from './menupostres.page';

const routes: Routes = [
  {
    path: '',
    component: MenupostresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenupostresPageRoutingModule {}
