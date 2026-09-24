import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../componentes/contato/contato.component';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly API = 'http://localhost:8080/api/contatos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  salvar(contato: Contato): Observable<Contato> {
    if (contato.id) {
      return this.http.put<Contato>(`${this.API}/${contato.id}`, contato);
    }
    return this.http.post<Contato>(this.API, contato);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}