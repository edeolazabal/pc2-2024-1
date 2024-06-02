import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuchaListarComponent } from './component/mucha-listar/mucha-listar.component';
import { MuchaCrearComponent } from './component/mucha-crear/mucha-crear.component';


export const routes: Routes = [
  {path: '', redirectTo: 'listar', pathMatch: 'full'},
  {path: 'listar', component: MuchaListarComponent},
  {path: 'mucha', component: MuchaCrearComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
