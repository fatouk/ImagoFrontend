import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionouvrierPage } from './inscriptionouvrier.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionouvrierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionouvrierPageRoutingModule {}
