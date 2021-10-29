import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuinicioPage } from './menuinicio.page';

const routes: Routes = [
  {
    path: '',
    component: MenuinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuinicioPageRoutingModule {}
