import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from '../models/projeto';

@Injectable({ providedIn: 'root' })
export class ProjetoService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/projetos';

  getProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.url);
  }
}