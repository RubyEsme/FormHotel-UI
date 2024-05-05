import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './formulario/welcome/welcome.component';
import { QuestionsComponent } from './formulario/questions/questions.component';
import { DespedidaComponent } from './formulario/despedida/despedida.component';
import { FirstQuestionsComponent } from './formulario/first-questions/first-questions.component';


const routes: Routes = [
  {path: 'Bienvenida', component: WelcomeComponent },
  {path: 'About', component: FirstQuestionsComponent},
  {path:  'Form', component: QuestionsComponent},
  {path: 'Despedida', component: DespedidaComponent},
  //{path: 'About You', component: AboutUser},
  {path: '**', redirectTo: 'Bienvenida'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
