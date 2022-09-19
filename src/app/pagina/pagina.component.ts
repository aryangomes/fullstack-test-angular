import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';
  public dataHoraAtual = '';
  public texto = '';

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) { }

  textoForm = this.formBuilder.group({
    texto: '',
  });

  ngOnInit (): void {
    this.apiService.getHello().pipe(
      catchError((error) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });

    this.apiService.recuperarDataHoraAtual().pipe(
      catchError((error) => {
        this.apiGreeting = 'Não foi possível recuperar a data e hora atual.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.dataHoraAtual = response.dataHoraAtual;
      }
    });
  }

  onSubmit (): void {
    let textoParaEnviar = this.textoForm.value;
    this.apiService.enviarTexto(textoParaEnviar).pipe(
      catchError((error) => {
        this.apiGreeting = 'Não foi possível enviar o texto.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.texto = response.texto;
      }
    });
  }

}
