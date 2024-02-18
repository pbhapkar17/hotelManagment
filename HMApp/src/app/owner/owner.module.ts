import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { SharedModule } from 'src/common/shared/shared.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';


@NgModule({
  declarations: [
    OwnerLandingComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
