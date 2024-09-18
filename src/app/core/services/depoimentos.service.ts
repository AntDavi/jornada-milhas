import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depoimentos } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar () : Observable<Depoimentos[]> {
    return this.httpClient.get<Depoimentos[]>(`${this.apiUrl}depoimentos`)
  }
}
