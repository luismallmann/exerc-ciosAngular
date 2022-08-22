import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario} from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent {
  user: string = "";
  password: string = "";
  msn?: string; 
  qntErros = 0;

  usuario: Usuario ={
    userId:"",
    password:"",
    tipo:""
  };
  //inicializa a cor
  cor = [""];

  //Função responsável por validar o login
  login() {
    this.user=this.usuario.userId;
    this.password = this.usuario.password;

    //Caso login e senha correta
    if (this.user == "XPTO-21" && this.password == "Trocar@123") {
      this.msn = "Logado!";
      this.cor = ["sucesso"]
    }
    //Se não estiver correta
    else {
      //Analisa o usuario
      if (this.user != "XPTO-21") {
        this.msn = "Acesso negado, usuário incorreto";
        this.cor = ["erro"]
      }
      //Analisa a senha
      else if (this.password != "Trocar@123") {
        this.msn = "Acesso negado, senha incorreta";
        this.qntErros++;
        this.cor = ["erro"]
      }
    }
    //Caso exceda três tentativas, o usuário é bloqueado
    if (this.qntErros >= 3) {
      this.msn = "Usuário Bloqueado!";
      this.cor = ["erro"]
    }
  }
}
