import { Component, computed, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Navbar } from './layout/auth-layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);

  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
  );

  showNavbar = computed(() => {
    this.navigationEnd();

    const url = this.router.url;
    const publicRoutes = ['', '/', '/connexion', '/inscription'];
    const currentPath = url.split('?')[0].split('#')[0];
    return !publicRoutes.includes(currentPath);
  });
}
