import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 1. Adicionado para o ngModel funcionar

import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

// 2. Import do novo componente de formulário
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

import agenda from './agenda.json';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,                // 3. Incluído no imports
    FormularioContatoComponent, // 4. Incluído no imports
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;
  filtroPorTexto: string = ''; // 5. Variável que estava faltando para a busca

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}