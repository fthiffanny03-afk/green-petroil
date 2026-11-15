import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjetoService } from '../../services/projeto';
import { TituloPagina } from '../../components/titulo-pagina/titulo-pagina';
import { ProjetoCard } from '../../components/projeto-card/projeto-card';

@Component({
  selector: 'app-projetos-sociais',
  imports: [TituloPagina, ProjetoCard],
  templateUrl: './projetos-sociais.html',
  styleUrl: './projetos-sociais.css',
})
export class ProjetosSociais {
  private projetoService = inject(ProjetoService);
  projetos = toSignal(this.projetoService.getProjetos(), { initialValue: [] });
}