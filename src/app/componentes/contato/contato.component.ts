import { Component, Input } from '@angular/core';

export interface Contato {
  id?: number;
  nome: string;
  telefone: string;
  email?: string;
  aniversario?: string;
  redes?: string;
  observacoes?: string;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = '';
  @Input() telefone: string = '';
}