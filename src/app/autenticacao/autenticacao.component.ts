import { Component, OnInit } from '@angular/core';
import { Usuario} from 'src/app/interfaces/usuario';
import {AutenticacaoService} from '../services/autenticacao.service'

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent {
  msn: string = ""; 
  cor = [""];
  qntErros = 0;

  usuarioCadastrado?: Usuario;
  usuario: Usuario={
    password:"",
    userId:"",
    tipo:"",
  };

  constructor (private autenticacaoService:AutenticacaoService){}

  //Função responsável por buscar os usuários cadastrados
  getUsuario(): void{
    this.autenticacaoService.getUsuario().subscribe((users) => (this.usuarioCadastrado = users[0]))
  }

  //Função responsável por validar o login
  login() {
    let userCadastrado: any;
    let passwordCadastrado: any;
    let userInformado: string;
    let passwordInformado: string;
   
    //Captura os dados informados no input HTML
    userInformado=this.usuario.userId;
    passwordInformado = this.usuario.password;

    //Aciona a função responsável por buscar os usuários cadastrados
    this.getUsuario();

    //Busca o login e senha previamente cadastrados
    userCadastrado = this.usuarioCadastrado?.userId.toString();
    passwordCadastrado=this.usuarioCadastrado?.password.toString();

    //Caso login e senha correta
    if (userInformado == userCadastrado && passwordInformado == passwordCadastrado) {
      localStorage.setItem('token','existe');
      this.msn = "Logado!";
      this.cor = ["sucesso"]  
    }
    //Se não estiver correta
    else {
      //Analisa o usuario
      if (userInformado != userCadastrado) {
        this.msn = "Acesso negado, usuário incorreto";
        this.cor = ["erro"]
      }
      //Analisa a senha
      else if (passwordInformado != passwordCadastrado) {
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
