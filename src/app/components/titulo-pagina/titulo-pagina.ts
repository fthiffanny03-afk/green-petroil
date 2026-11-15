import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.html',
  styleUrl: './titulo-pagina.css',
})
export class TituloPagina {
  titulo = input.required<string>();
  subtitulo = input<string>('');
}