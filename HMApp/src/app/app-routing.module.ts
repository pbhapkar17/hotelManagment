import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/common/common-components/landing/landing.component';
import { SigninComponent } from 'src/common/common-components/signin/signin.component';
import { SignupComponent } from 'src/common/common-components/signup/signup.component';

const routes: Routes = [
  { path : '', component: LandingComponent},
  { path : 'landing', component: LandingComponent},
  { path : 'signIn', component: SigninComponent},
  { path : 'signUp', component: SignupComponent},
  { path: 'owner',  loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)},
  { path : 'admin',  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path : 'user',  loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
