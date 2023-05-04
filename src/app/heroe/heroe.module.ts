import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeListComponent } from './components/heroe-list/heroe-list.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AlertDialogComponent,
    HeroeListComponent,
    HeroeCardComponent,
    HomeComponent,
    PaginatorComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HeroeModule { }
