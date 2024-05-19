import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './formulario/welcome/welcome.component';
import { QuestionsComponent } from './formulario/questions/questions.component';
import { DespedidaComponent } from './formulario/despedida/despedida.component';
import { FirstQuestionsComponent } from './formulario/first-questions/first-questions.component';
import { FormClientComponent } from './form-client/form-client.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    DespedidaComponent,
    FirstQuestionsComponent,
    FormClientComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
