import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../common-components/signup/signup.component';
import { SigninComponent } from '../common-components/signin/signin.component';
import { LandingComponent } from '../common-components/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    SignupComponent,
    SigninComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
