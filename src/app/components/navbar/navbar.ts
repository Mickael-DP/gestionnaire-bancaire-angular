import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  items = [
    { label: 'Mes Comptes', icon: 'pi pi-wallet', routerLink: '/comptes', exact: true },
    { label: 'Nouveau compte', icon: 'pi pi-plus-circle', routerLink: '/comptes/create', exact: true },
    { label: 'Virement', icon: 'pi pi-arrow-right-arrow-left', routerLink: '/virement', exact: true }
  ];
}