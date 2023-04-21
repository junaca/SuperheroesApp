import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeListComponent } from './components/heroe-list/heroe-list.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TopBotonComponent } from './components/top-boton/top-boton.component';


@NgModule({
  declarations: [
    AlertDialogComponent,
    DetailsComponent,
    HeroeListComponent,
    HeroeCardComponent,
    HomeComponent,
    PaginatorComponent,
    SearchbarComponent,
    TopBotonComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class HeroeModule { }
