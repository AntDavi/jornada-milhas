import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocoes } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar () : Observable<Promocoes[]> {
    return this.httpClient.get<Promocoes[]>(`${this.apiUrl}promocoes`)
  }
}
