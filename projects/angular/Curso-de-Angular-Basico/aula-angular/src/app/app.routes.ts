import { Routes } from '@angular/router';
import { HomeComponent } from './pagina/home/home.component';
import { ListaComponent } from './pagina/lista/lista.component';
import { ContatoComponent } from './pagina/contato/contato.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona '/' para '/home'
    {path: 'home', component: HomeComponent},
    {path: 'lista', component: ListaComponent},
    {path: 'contato', component: ContatoComponent}
];
