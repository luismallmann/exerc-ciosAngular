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

  //Função responsável por validar o login
  login(){

    //Caso login e senha correta
    if(this.email == "XPTO-21" && this.password == "Trocar@123"){
      this.msn="Logado!";
      this.cor="green";
    }
    //Se não estiver correta
    else{
      //Analisa o usuario
      if(this.email != "XPTO-21"){
        this.msn="Acesso negado, usuário incorreto";
        this.cor="red";
      }
      //Analisa a senha
      else if(this.password != "Trocar@123"){
        this.msn="Acesso negado, senha incorreta";
        this.qntErros++;
        this.cor="red";
      }
    }
    //Caso exceda três tentativas, o usuário é bloqueado
    if(this.qntErros >=3){
      this.msn ="Usuário Bloqueado!";
      this.cor="red";
    }  
  }
}
