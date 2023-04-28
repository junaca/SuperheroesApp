import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { EntertaimentComponent } from './pages/entertaiment/entertaiment.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DetailsComponent
      },
      {
        path: "entertaiment",
        component: EntertaimentComponent
      },
      {
        path: "**",
        redirectTo: ""
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
