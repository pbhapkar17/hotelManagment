import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.css']
})
export class OwnerLandingComponent {
  hoteRegiForm!: FormGroup;
  fromSignIn: any;
  show: boolean = false
  constructor(private router: Router,
    private apicallService: ApicallService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.fromSignIn = this.apicallService.fromSignIn;

  }

  back() {
    if (this.fromSignIn) {
      this.router.navigateByUrl('/signIn');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }
  newHotelReg() {
    this.show = true
    this.formDetails()
  }

  viewHotels() {

  }
  formDetails() {
    this.hoteRegiForm = this.formBuilder.group({
      ownerName: ['Poonam Patil', [Validators.required]],
      mob: [989898999, [Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      hotelName: [],
      password: [],

    })
  }

  register() {
    this.apicallService.postApiCall(this.hoteRegiForm.value, 'hotelRegister').subscribe(resp => {
      this.show = false
    })
  }
}
