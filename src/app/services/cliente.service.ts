import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Pais } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = 'http://localhost:8080/api'; // Ajustá según tu puerto de Spring Boot

  constructor(private http: HttpClient) { }

  // LISTAR
  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}/clientes`);
  }

  // LISTAR PAISES PARA EL SELECTOR
  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}/paises`);
  }

  // CREAR
  crear(c: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.url}/clientes`, c);
  }

  // ACTUALIZAR (PUT)
  actualizar(c: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/clientes/${c.id}`, c);
  }

  // ELIMINAR (Opcional pero recomendado)
  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/clientes/${id}`);
  }
}