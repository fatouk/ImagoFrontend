import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.page.html',
  styleUrls: ['./numero.page.scss'],
})
export class NumeroPage implements OnInit {
email:any;
password:any;
numero:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClickButton(){
this.router.navigateByUrl('verifierotp');
  }
}
