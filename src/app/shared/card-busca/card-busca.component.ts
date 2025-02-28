import { Component, Input } from '@angular/core';
import { Promocoes } from '../../core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {
  @Input() promocao!: Promocoes;
}
