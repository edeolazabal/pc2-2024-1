import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VillalobosListarComponent } from './components/villalobos-listar/villalobos-listar.component';
import { VillalobosCrearComponent } from './components/villalobos-crear/villalobos-crear.component';

export const routes: Routes = [
  {path: '', redirectTo: 'villalobos/listar', pathMatch: 'full'},
  {path: 'villalobos/listar', component: VillalobosListarComponent},
  {path: 'villalobos/nuevo', component: VillalobosCrearComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
