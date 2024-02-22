import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.css']
})
export class OwnerLandingComponent {
  
  fromSignIn:any
  constructor(private  router: Router, private apicallService:ApicallService){}

  ngOnInit() {

   this.fromSignIn = this.apicallService.fromSignIn;

  }

  back(){
    if (this.fromSignIn) {
      this.router.navigateByUrl('/signIn');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }
  newHotelReg(){

  }

  viewHotels(){
    
  }

}
