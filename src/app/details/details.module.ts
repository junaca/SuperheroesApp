import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './pages/details/details.component';
import { EntertaimentComponent } from './pages/entertaiment/entertaiment.component';
import { TopBotonComponent } from '../shared/components/top-boton/top-boton.component';
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
