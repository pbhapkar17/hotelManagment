import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../common-components/signup/signup.component';
import { SigninComponent } from '../common-components/signin/signin.component';
import { LandingComponent } from '../common-components/landing/landing.component';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignupComponent,
    SigninComponent
  ]
})
export class SharedModule { }
