import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontesListMinaComponent } from './components/montes-list-mina/montes-list-mina.component';
import { MontesAddMinaComponent } from './components/montes-add-mina/montes-add-mina.component';

export const routes: Routes = [
  {path: '', redirectTo: 'listmina', pathMatch: 'full'},
  {path: 'montes', component: MontesListMinaComponent},
  {path: 'montes/nuevo', component: MontesAddMinaComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
