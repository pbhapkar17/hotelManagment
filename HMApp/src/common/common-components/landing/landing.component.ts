import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  initialJourney :boolean = true;
  showSignInBackDiv : boolean = false;

  constructor(private  router: Router, private apicallService:ApicallService){}

  journey(journey:string){

    //  if(journey == 'admin'){
    //    this.router.navigateByUrl('admin')
    //  }
    //  else if(journey == 'owner'){
    //   this.router.navigateByUrl('owner')
    //  }
    //  else{
    //   this.router.navigateByUrl('user')
    //  }
   this.apicallService.journey = journey;
   this.initialJourney = false;
   this.showSignInBackDiv = true

  }

  back(){
    this.initialJourney = true;
    this.showSignInBackDiv = false;
  }

  signIn(){
    this.router.navigateByUrl('/signIn')
  }


}
