import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista 01';
  value: string = "";
  texto: string = "";
  textoTitulo: string = "";
  
  public mostrarDados(){
    this.textoTitulo = this.texto;
    this.value = this.texto;

  }

  public limparCampo(){    
    this.value = "";
  }  
}
