import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MadalengoitiaListarComponent } from './components/madalengoitia-listar/madalengoitia-listar.component';
import { MadalengoitiaCrearComponent } from './components/madalengoitia-crear/madalengoitia-crear.component';


const routes: Routes = [
  {path: 'list', component:MadalengoitiaListarComponent},
  {path: 'madalengoitia/nuevo', component:MadalengoitiaCrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
