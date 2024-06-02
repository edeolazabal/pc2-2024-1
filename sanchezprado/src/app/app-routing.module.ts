import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SanchezCrearComponent } from './components/sanchez-crear/sanchez-crear.component';
import { SanchezListarComponent } from './components/sanchez-listar/sanchez-listar.component';
export const routes: Routes = [
  { path: '', redirectTo: '/crearauto', pathMatch: 'full' },
  {path: 'sanchez/nuevo', component: SanchezCrearComponent},
  {path: 'sanchez/lista', component: SanchezListarComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
