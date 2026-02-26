import { Routes } from '@angular/router';
import { ListeComptes } from './components/liste-comptes/liste-comptes';
import { DetailCompte } from './components/detail-compte/detail-compte';
import { CreationCompte } from './components/creation-compte/creation-compte';
import { Virement } from './components/virement/virement';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'connexion', component: Login },
    { path: 'inscription', component: Register },
    { path: 'comptes', component: ListeComptes },
    { path: 'comptes/create', component: CreationCompte },
    { path: 'virement', component: Virement },
    { path: 'comptes/:id', component: DetailCompte },
    { path: '**', redirectTo: '' },
];
