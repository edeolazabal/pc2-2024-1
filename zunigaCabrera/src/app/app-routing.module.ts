import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZunigaListarComponent } from './components/zuniga-listar/zuniga-listar.component';
import { ZunigaCrearComponent } from './components/zuniga-crear/zuniga-crear.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes=[
  {path:'', redirectTo:'zuniga/listar', pathMatch:'full'},
  {path:'zuniga/listar', component: ZunigaListarComponent},
  {path: 'zuniga/nuevo', component: ZunigaCrearComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes), MatDatepickerModule,
    MatNativeDateModule, ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
