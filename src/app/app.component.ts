import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './componentes/container/container.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent, Contato } from './componentes/contato/contato.component';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

import agendaMock from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContainerComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contatos: Contato[] = agendaMock;
  filtroPorTexto: string = '';
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome.toLowerCase()).includes(this.removerAcentos(this.filtroPorTexto.toLowerCase()));
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome.toLowerCase()).startsWith(this.removerAcentos(letra.toLowerCase()));
    });
  }
}