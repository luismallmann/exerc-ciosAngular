import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from "@angular/router"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) { }
  
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
 
  public existeToken(){
    if(localStorage['token']==='existe'){
      return true;
    }
    else{
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
 }
}
