import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuinicioPageRoutingModule } from './menuinicio-routing.module';

import { MenuinicioPage } from './menuinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuinicioPageRoutingModule
  ],
  declarations: [MenuinicioPage]
})
export class MenuinicioPageModule {}
