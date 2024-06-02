import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JimenezListarComponent} from "./jimenez-listar/jimenez-listar.component";
import {JimenezCrearComponent} from "./jimenez-crear/jimenez-crear.component";

const routes: Routes = [
  { path: 'jimenez/nuevo', component: JimenezCrearComponent },
  { path: 'jimenez/listar', component: JimenezListarComponent },
  { path: '', redirectTo: '/jimenez/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
