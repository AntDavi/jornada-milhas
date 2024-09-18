import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Depoimentos, Promocoes } from '../../core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promocoes: Promocoes[] = [];
  depoimentos: Depoimentos[] = [];

  constructor( private servicePromocao: PromocaoService ) {

  }

  ngOnInit(): void {
    this.servicePromocao.listar()
    .subscribe(
      resposta => {
        this.promocoes = resposta;
      }
    );
  }
}
