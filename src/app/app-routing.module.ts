import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: 'Bienvenida', component: FormularioComponent},
  //{path: 'About You', component: AboutUser},
  {path: '**', redirectTo: 'Bienvenida'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
