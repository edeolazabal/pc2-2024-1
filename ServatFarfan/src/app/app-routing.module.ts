import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestigacionComponent } from './component/investigacion/investigacion.component';
import { ServatCrearComponent } from './component/investigacion/servat-crear/servat-crear.component';
import { ServatListarComponent } from './component/investigacion/servat-listar/servat-listar.component';

const routes: Routes = [
  {
     path:'servat', component: InvestigacionComponent, children: [
      {
         path : 'nuevo', component: ServatCrearComponent
      },
      {
         path : 'listar' , component: ServatListarComponent
      }
     ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
