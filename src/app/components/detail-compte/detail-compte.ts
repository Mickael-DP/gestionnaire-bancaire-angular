import { Component, OnInit } from '@angular/core';
import { Compte } from '../../models/compte.model';
import { CompteService } from '../../services/compte.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-detail-compte',
  imports: [CommonModule, FormsModule, ButtonModule, TagModule, DialogModule, RouterModule],
  templateUrl: './detail-compte.html',
  styleUrl: './detail-compte.css',
})
export class DetailCompte implements OnInit {

  compte$: Observable<Compte> | null = null;
  id: number | null = null;
  montant: number | null = null;
  showModal: boolean = false;
  operationType: 'depot' | 'retrait' | null = null;

  constructor(
    private route: ActivatedRoute,
    private compteService: CompteService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.id = id;
      this.compte$ = this.compteService.consulterCompte(id);
    }
  }

  ouvrirModal(type: 'depot' | 'retrait'): void {
    this.operationType = type;
    this.showModal = true;
  }

  fermerModal(): void {
    this.showModal = false;
    this.montant = null;
    this.operationType = null;
  }

  confirmerOperation(): void {
    if (this.id && this.montant && this.operationType) {
      const operation$ = this.operationType === 'depot'
        ? this.compteService.deposer(this.id, this.montant)
        : this.compteService.retirer(this.id, this.montant);

      operation$.subscribe(() => {
        this.compte$ = this.compteService.consulterCompte(this.id!);
        this.fermerModal();
      });
    }
  }

  suppCompte(): void {
    if (this.id) {
      this.compteService.deleteCompte(this.id).subscribe(() => {
        window.location.href = '/comptes';
      });
    }
  }
}
