import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenupostresPageRoutingModule } from './menupostres-routing.module';

import { MenupostresPage } from './menupostres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenupostresPageRoutingModule
  ],
  declarations: [MenupostresPage]
})
export class MenupostresPageModule {}
