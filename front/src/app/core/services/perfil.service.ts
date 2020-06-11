import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PerfilI } from '../interfaces/perfil.interface';
const api = environment.api;
@Injectable()
export class PerfilService {
  constructor(private http: HttpClient) {}
  token = localStorage.getItem('token');
  //   perfilEditado = new EventEmitter<PerfilI>();

  cadastrarPerfil(perfil: PerfilI): Observable<any> {
    return this.http.post(`${api}/perfil`, perfil);
  }
  buscarPerfis(): Observable<any> {
    return this.http.get(`${api}/perfil`);
  }
  editarPerfil(senha: string, telefone: string, id: string): Observable<any> {
    return this.http.put(`${api}/perfil/editar/${id}`, {
      Senha: senha,
      Telefone: telefone,
    });
  }

  deletarPerfil(id: string): Observable<any> {
    return this.http.delete(`${api}/perfil/deletar/${id}`, {});
  }
}
