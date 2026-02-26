import { Routes } from '@angular/router';
import { ListeComptes } from './features/comptes/components/liste-comptes/liste-comptes';
import { DetailCompte } from './features/comptes/components/detail-compte/detail-compte';
import { CreationCompte } from './features/comptes/components/creation-compte/creation-compte';
import { Virement } from './features/virements/components/virement/virement';
import { Home } from './layout/public-layout/home/home';
import { Register } from './features/auth/components/register/register';
import { Login } from './features/auth/components/login/login';

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
