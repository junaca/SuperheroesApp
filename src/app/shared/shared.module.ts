import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TopBotonComponent } from './components/top-boton/top-boton.component';
import { DatePipe } from './pipes/date.pipe';


@NgModule({
  declarations: [
    TopBotonComponent,
    DatePipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    AngularMaterialModule,
    TopBotonComponent,
    DatePipe
  ]
})
export class SharedModule { }
