import { HttpClient } from '@angular/common/http';
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

}
