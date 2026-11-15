import { Component, input } from '@angular/core';
import { Projeto } from '../../models/projeto';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.html',
  styleUrl: './projeto-card.css',
})
export class ProjetoCard {
  projeto = input.required<Projeto>();
}