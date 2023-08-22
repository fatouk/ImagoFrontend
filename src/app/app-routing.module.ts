import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'splash-screem',
    loadChildren: () => import('./splash-screem/splash-screem.module').then( m => m.SplashScreemPageModule)
  },
  {
    path: 'login-email',
    loadChildren: () => import('./login-email/login-email.module').then( m => m.LoginEmailPageModule)
  },
  
  {
    path: 'numero',
    loadChildren: () => import('./numero/numero.module').then( m => m.NumeroPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'verifierotp',
    loadChildren: () => import('./verifierotp/verifierotp.module').then( m => m.VerifierotpPageModule)
  },
  {
    path: 'inscriptionouvrier',
    loadChildren: () => import('./inscriptionouvrier/inscriptionouvrier.module').then( m => m.InscriptionouvrierPageModule)
  },
  {
    path: 'inscriptionclient',
    loadChildren: () => import('./inscriptionclient/inscriptionclient.module').then( m => m.InscriptionclientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
