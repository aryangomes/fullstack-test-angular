import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getHello (): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  public recuperarDataHoraAtual (): Observable<any> {
    return this.http.get(environment.apiHost + '/dataHoraAtual');
  }

  public enviarTexto (texto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(environment.apiHost + '/retornaTexto', texto, httpOptions);
  }

}
