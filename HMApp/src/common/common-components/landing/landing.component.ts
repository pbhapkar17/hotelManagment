import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
constructor(private  router: Router){}

  journey(journey:string){
     if(journey == 'admin'){
       this.router.navigateByUrl('admin')
     }
     else if(journey == 'owner'){
      this.router.navigateByUrl('owner')
     }
     else{
      this.router.navigateByUrl('user')
     }
  }

  
}
