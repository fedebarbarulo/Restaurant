import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenubebidasPage } from './menubebidas.page';

const routes: Routes = [
  {
    path: '',
    component: MenubebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenubebidasPageRoutingModule {}
