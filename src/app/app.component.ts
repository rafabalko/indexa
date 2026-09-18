import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contatos: ContatoComponent[] = agenda;
  filtroPorTexto: string = '';
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): ContatoComponent[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome.toLowerCase()).includes(this.removerAcentos(this.filtroPorTexto.toLowerCase()));
    });
  }

  filtrarContatosPorLetraInicial(letra: string): ContatoComponent[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome.toLowerCase()).startsWith(this.removerAcentos(letra.toLowerCase()));
    });
  }
}