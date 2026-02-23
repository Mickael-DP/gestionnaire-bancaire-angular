import { Routes } from '@angular/router';
import { ListeComptes } from './components/liste-comptes/liste-comptes';

export const routes: Routes = [
    {path: 'comptes', component: ListeComptes},
    {path: '', redirectTo: '/comptes', pathMatch: 'full'},

];
