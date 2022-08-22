import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
