import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {this.formulario = this.formBuilder.group({
    userId: [''],
    password: [''],
    tipo: ['']
  }) 
};
  
  ngOnInit(): void {
    
  }
}
