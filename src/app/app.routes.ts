import { Routes } from '@angular/router';
import { ListeComptes } from './components/liste-comptes/liste-comptes';
import { DetailCompte } from './components/detail-compte/detail-compte';
import { CreationCompte } from './components/creation-compte/creation-compte';
import { Virement } from './components/virement/virement';

export const routes: Routes = [
    {path: 'comptes', component: ListeComptes},
    {path:'comptes/create', component: CreationCompte},
    {path: 'virement', component: Virement},
    {path: 'comptes/:id', component: DetailCompte},
    {path: '', redirectTo: '/comptes', pathMatch: 'full'},
];
