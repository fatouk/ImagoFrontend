import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionouvrierPageRoutingModule } from './inscriptionouvrier-routing.module';

import { InscriptionouvrierPage } from './inscriptionouvrier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionouvrierPageRoutingModule
  ],
  declarations: [InscriptionouvrierPage]
})
export class InscriptionouvrierPageModule {}
