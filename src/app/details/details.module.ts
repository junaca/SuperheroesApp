import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './pages/details/details.component';
import { EntertaimentComponent } from './pages/entertaiment/entertaiment.component';
import { DetailsRoutingModule } from './details-routing.module';



@NgModule({
  declarations: [
    DetailsComponent,
    EntertaimentComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
