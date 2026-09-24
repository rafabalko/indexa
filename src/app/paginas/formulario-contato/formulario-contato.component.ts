import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContainerComponent,
    SeparadorComponent
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    });
  }

  salvarContato(): void {
    if (this.contatoForm.valid) {
      this.contatoService.salvar(this.contatoForm.value).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Erro ao salvar contato:', err)
      });
    }
  }

  cancelar(): void {
    this.contatoForm.reset();
    this.router.navigate(['/']);
  }
}