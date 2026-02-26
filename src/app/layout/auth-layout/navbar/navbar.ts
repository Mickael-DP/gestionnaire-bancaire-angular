import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  user: any = null;

  items = [
    { label: 'Mes Comptes', icon: 'pi pi-wallet', routerLink: '/comptes', exact: true },
    { label: 'Nouveau compte', icon: 'pi pi-plus-circle', routerLink: '/comptes/create', exact: true },
    { label: 'Virement', icon: 'pi pi-arrow-right-arrow-left', routerLink: '/virement', exact: true }
  ];

  ngOnInit(): void {
    this.authService.getMe().subscribe(data => {
      this.user = data;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}