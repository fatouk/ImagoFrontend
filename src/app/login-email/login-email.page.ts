import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPage implements OnInit {
  currentDateTime:any
  button1:boolean=true;
  button2:boolean=false;
  verifier:boolean=false;
  defaultButtonId: string = 'button1';
  selectedButtonId: string="";
  shouldExecute: boolean = true;
  buttonId: string=""; // Varia
  constructor() { }

  ngOnInit() {
    this.currentDateTime=new Date();
  }
  trueButtonOne(){
    this.button1=true;
    this.button2=false;
    this.buttonId="button1";
    this.selectedButtonId = 'button1'; 
  }
  trueButtonTwo(){
    this.button1=false;
    this.button2=true;
    this.selectedButtonId = 'button2'; 
    this.buttonId="button2";
    this.shouldExecute=false;

  }
   ionViewDidEnter() {
      if (this.shouldExecute) { // Vérifie si aucun bouton n'a déjà été sélectionné
        this.buttonId = this.defaultButtonId;
        this.selectedButtonId = 'button1'; 
       }
    
  }
  onClickButton(){
   this.verifier=true;
   this.button1=false;
   this.button2=false;
  }  
  selectButton(buttonId: string) {
    this.selectedButtonId = buttonId;
  }


}
