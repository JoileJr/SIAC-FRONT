import { Injectable } from '@angular/core';
import { PacienteDTO } from '../../models/paciente-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl = 'http://localhost:8080/pac/'

  constructor(private http: HttpClient) {}

  create(obj: PacienteDTO): Observable<PacienteDTO> {
    return this.http.post<PacienteDTO>(`${this.apiUrl}`, obj);
  }

  getAll(): Observable<PacienteDTO[]> {
    return this.http.get<PacienteDTO[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<PacienteDTO> {
    return this.http.get<PacienteDTO>(`${this.apiUrl}/${id}`);
  }

  update(obj: PacienteDTO): Observable<PacienteDTO> {
    return this.http.put<PacienteDTO>(`${this.apiUrl}/${obj.id}`, obj);
  }

}
