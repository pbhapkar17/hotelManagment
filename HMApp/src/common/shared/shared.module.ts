import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../common-components/signup/signup.component';
import { SigninComponent } from '../common-components/signin/signin.component';
import { LandingComponent } from '../common-components/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
  ],
  exports:[
    SignupComponent,
    SigninComponent,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
  ]
})
export class SharedModule { }
