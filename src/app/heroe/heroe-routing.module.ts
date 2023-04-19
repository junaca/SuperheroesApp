import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "details",
        component: DetailsComponent
      },{
        path: "**",
        redirectTo: "home"
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroeRoutingModule { }
