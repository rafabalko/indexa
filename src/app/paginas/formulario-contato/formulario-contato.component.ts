import { Component } from '@angular/core';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContainerComponent } from '../../componentes/container/container.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    SeparadorComponent
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

}