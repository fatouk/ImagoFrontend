import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmailPageRoutingModule } from './login-email-routing.module';

import { LoginEmailPage } from './login-email.page';
import { NumeroPage } from '../numero/numero.page';
import { EmailPage } from '../email/email.page';
import { VerifierotpPage } from '../verifierotp/verifierotp.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmailPageRoutingModule
  ],
  declarations: [LoginEmailPage,NumeroPage,EmailPage,VerifierotpPage]
})
export class LoginEmailPageModule {}
