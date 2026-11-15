import { Component } from '@angular/core';
import { TituloPagina } from '../../components/titulo-pagina/titulo-pagina';

@Component({
  selector: 'app-sobre',
  imports: [TituloPagina],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}