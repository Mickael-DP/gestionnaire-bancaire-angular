import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { Compte } from '../../models/compte.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-liste-comptes',
  imports: [CommonModule, TagModule, RouterModule],
  templateUrl: './liste-comptes.html',
  styleUrl: './liste-comptes.css',
})
export class ListeComptes implements OnInit {

  comptes$: Observable<Compte[]> | null = null;

  constructor(private compteService: CompteService, private route: Router) { }

  ngOnInit(): void {
    this.comptes$ = this.compteService.listerComptes();
  }

  consulterCompte(id: number): void {
    this.route.navigate(['/comptes', id]);
  }
}