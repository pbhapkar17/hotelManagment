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
  allHotelData: any;
  userName:any //signin form
  list!: any[];
  constructor(private router: Router,
    private apicallService: ApicallService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
   this.userName = this.apicallService.userName;

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
   this.getAllHotelsFromDB();
  
  }
  formDetails() {
    this.hoteRegiForm = this.formBuilder.group({
      ownerName: ['Poonam', [Validators.required]],
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

 async getAllHotelsFromDB(){
  this.allHotelData =   await this.apicallService.getUserData('hotelRegister').toPromise()
   console.log('this.allHotelData',this.allHotelData);
   this.getHotelListBuOwner();
}
getHotelListBuOwner(){
 this.list = []
if( this.allHotelData.length > 0){
  this.allHotelData.forEach((item:any)=>{
     if(item.ownerName == this.userName){
      this.list.push(item)
     }
  })
}
console.log('list',this.list);

}
}
