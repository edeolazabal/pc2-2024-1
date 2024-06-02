import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UminaListarComponent } from './component/umina-listar/umina-listar.component';
import { UminaCrearComponent } from './component/umina-crear/umina-crear.component';

export const routes: Routes = [
  {path: '', redirectTo: 'listar', pathMatch: 'full'},
  {path: 'umina/nuevo', component: UminaCrearComponent},
  {path: 'listar', component: UminaListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
