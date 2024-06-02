import { OchoaListarComponent } from './components/ochoa-listar/ochoa-listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OchoaCrearComponent } from './components/ochoa-crear/ochoa-crear.component';

const routes: Routes = [
  {path: 'ochoa/nuevo', component: OchoaCrearComponent},
  {path: 'ochoa/listar', component: OchoaListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
