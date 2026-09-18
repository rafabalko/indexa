import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Domingos'),
      telefone: new FormControl('18-12349876'),
      email: new FormControl('nome@fema.edu.br'),
      aniversario: new FormControl('10/10/2024'),
      redes: new FormControl('www.dvillela.fema.edu.br'),
      observacoes: new FormControl('Olá munndo')
    });
  }

  salvarContato() {
    console.log(this.contatoForm.value);
  }

  cancelar() {
    console.log('Submissão cancelada');
  }
}