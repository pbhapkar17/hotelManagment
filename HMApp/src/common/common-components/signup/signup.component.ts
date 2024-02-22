import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup;
  visible = false;
  visibleConfirm = false;
  isMatch = false;
  journey: any;
  constructor(private formBuilder: FormBuilder,
     private apiCallService:ApicallService, private router:Router) { }

  ngOnInit() {
    this.journey = this.apiCallService.journey;
    this.formDetails();

  }

  formDetails() {
    this.signUpForm = this.formBuilder.group({
      fullName: ['Poonam Patil', [Validators.required, this.whiteSpaceRemoveValidator]],
      mob: [989898999, [Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      gender: ['male'],
      pan: [],
      password: [],
      confirmPass: [],
      tc:[true,[Validators.requiredTrue]]
    })
  }

  visiblePassword() {
    this.visible = !this.visible;
  }

  visibleConfirmPassword() {
    this.visibleConfirm = !this.visibleConfirm;
  }

  passMatch() {
    if(this.signUpForm.value.confirmPass !=null ){
      if (this.signUpForm.value.password == this.signUpForm.value.confirmPass ) {
        this.isMatch = false
      } else {
        this.isMatch = true;
      }
    }
   
  }
  submit(){
    console.log('this.signUpForm.value',this.signUpForm.value);
    // let req = {
    //   "full_Name" : this.signUpForm.value.fullName,
    //   "mob_No" : this.signUpForm.value.mob,
    //   "gender" : this.signUpForm.value.gender,
    //   "pass": this.signUpForm.value.password,
    //   "confirm_Pass":this.signUpForm.value.confirmPass,
    //   "terms_cond":this.signUpForm.value.tc
    // }
    this.apiCallService.postApiCall(this.signUpForm.value).subscribe(response => {
      this.apiCallService.fromSignIn = false;
      if (this.journey == 'admin') {
        this.router.navigateByUrl('/admin')
      } else if (this.journey == 'owner') {
        this.router.navigateByUrl('/owner')
      }
      else {
        this.router.navigateByUrl('/user')
      }

    })

  }
//'/\s{1,}/g'
  whiteSpaceRemoveValidator(inputBoxValue:any){
     console.log('inp val',inputBoxValue);
    let spaceInclude = inputBoxValue?.value?.includes('  ')
    return spaceInclude ? {'whiteSpaceError':true} :null
  } 
}


