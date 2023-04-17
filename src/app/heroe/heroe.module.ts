import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeRoutingModule } from './heroe-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HeroeListComponent } from './components/heroe-list/heroe-list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    SearchbarComponent,
    HeroeListComponent,
    HeroeCardComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    AngularMaterialModule
  ]
})
export class HeroeModule { }
