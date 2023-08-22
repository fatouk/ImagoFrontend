import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifierotpPage } from './verifierotp.page';

const routes: Routes = [
  {
    path: '',
    component: VerifierotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifierotpPageRoutingModule {}
