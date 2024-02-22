import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name = 'poonam'
  isShowPass = false;
  userData: any;
  isValid = false;
  journey: any;
  constructor(private apiCallService: ApicallService, private router: Router) { }

  ngOnInit() {
    this.journey = this.apiCallService.journey;
    this.getUserData();
  }

  getUserData() {
    this.apiCallService.getUserData().subscribe(response => {
      this.userData = response;
      console.log(this.userData);

    })
  }
  //Template driven : form fileds are less
  //reactive form : form fileds are more, need custom validation

  login(data: any) {
    console.log('data', data);

    // let userName = data.uName.replace(/\s+/g, ' ');
    // console.log(userName);
    //  let request = {
    //     "UserName" : userName,
    //     "Password" : data.password
    //  }
    if (this.userData) {
      var validUser = this.userData.find((item: any) => {
        return item.fullName == data.uName && data.password == item.password;
      })
    }
    if (validUser) {
      this.apiCallService.userName = data.uName;//poonam
      this.apiCallService.id = validUser.id;
      this.apiCallService.fromSignIn = true;
      if (this.journey == 'admin') {
        this.router.navigateByUrl('/admin')
      } else if (this.journey == 'owner') {
        this.router.navigateByUrl('/owner')
      }
      else {
        this.router.navigateByUrl('/user')
      }
    } else {
      this.isValid = true;
      //this.router.navigateByUrl('/user/userLogin');
    }
  }

  toShowPassword() {
    this.isShowPass = !this.isShowPass;
  }

  back() {
    console.log('back..');
    this.router.navigateByUrl('/landing');
  }
  signUp() {
    this.router.navigateByUrl('/signUp');
  }
}
