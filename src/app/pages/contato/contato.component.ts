import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required,Validators.pattern('[A-Z]+')]],
      telefone:[''],
      email:['',[Validators.required,Validators.email]],
      cep:['',[Validators.minLength(8),Validators.maxLength(8)]],
      assunto:['',[Validators.required,Validators.maxLength(50)]],
      mensagem:['',[Validators.required,Validators.maxLength(500)]],
  }) 
};
  
  ngOnInit(): void {
    
  }

  cadastrarMensagem(): void{
    console.log("Nome: "+this.formulario.get('nome')?.value
    +"\nTelefone: "+this.formulario.get('telefone')?.value
    +"\nEmail: "+this.formulario.get('email')?.value
    +"\nCEP: "+this.formulario.get('cep')?.value
    +"\nAssunto: "+this.formulario.get('assunto')?.value
    +"\nMensagem: "+this.formulario.get('mensagem')?.value
    );
  }
}
