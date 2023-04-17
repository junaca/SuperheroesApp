import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "heroe",
    loadChildren: () => import( "./heroe/heroe.module" )
    .then( m => m.HeroeModule )
  },
  {
    path: "**",
    redirectTo: "heroe"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
