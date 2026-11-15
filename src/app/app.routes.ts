import { RouterLink } from '@angular/router';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { ProjetosSociais } from './pages/projetos-sociais/projetos-sociais';
import { Post } from './pages/post/post';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre},
  { path: 'projetos-sociais', component: ProjetosSociais},
  { path: 'post/:id', component: Post},
];

