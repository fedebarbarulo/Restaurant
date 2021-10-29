import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenubebidasPageRoutingModule } from './menubebidas-routing.module';

import { MenubebidasPage } from './menubebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenubebidasPageRoutingModule
  ],
  declarations: [MenubebidasPage]
})
export class MenubebidasPageModule {}
