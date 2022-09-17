import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';


import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';
  public dataHoraAtual = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit (): void {
    this.apiService.getHello().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });

    this.apiService.recuperarDataHoraAtual().pipe(
      catchError((err) => {
        this.apiGreeting = 'Não foi possível recuperar a data e hora atual.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.dataHoraAtual = response.dataHoraAtual;
      }
    });
  }

}
