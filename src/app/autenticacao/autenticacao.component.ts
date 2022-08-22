import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent{
  email:string="";
  password:string="";
  msn:string="";
  cor: string="";
  qntErros = 0;

  login(){
    if(this.email == "XPTO-21" && this.password == "Trocar@123"){
      this.msn="Logado!";
      this.cor="green";
    }
    else{
      if(this.email != "XPTO-21"){
        this.msn="Acesso negado, usuário incorreto";
        this.cor="red";
      }
      else if(this.password != "Trocar@123"){
        this.msn="Acesso negado, senha incorreta";
        this.qntErros++;
        this.cor="red";
      }
    }
    if(this.qntErros >=3){
      this.msn ="Usuário Bloqueado!";
      this.cor="red";
    }  
  }
}
