import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name='poonam'
  isShowPass = false;
  userData:any;
  isValid =false;
  constructor(private route : Router){}

  login(data:any){

  }
  toShowPassword(){}

  back(){
    console.log('back..');
    this.route.navigateByUrl('/landing')
  }
}
