import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TopBotonComponent } from './components/top-boton/top-boton.component';



@NgModule({
  declarations: [
    TopBotonComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    AngularMaterialModule,
    TopBotonComponent
  ]
})
export class SharedModule { }
