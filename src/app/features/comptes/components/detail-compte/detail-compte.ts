import { Component, OnInit } from '@angular/core';
import { Compte } from '../../../../shared/models/compte.model';
import { CompteService } from '../../services/compte.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import {  ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-detail-compte',
  imports: [CommonModule, FormsModule, ButtonModule, TagModule, DialogModule, RouterModule, ConfirmDialog, ToastModule],
  providers: [MessageService, ConfirmationService],
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
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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
  this.confirmationService.confirm({
    message: 'Êtes-vous sûr de vouloir supprimer ce compte ?',
    header: 'Confirmation de suppression',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Supprimer',
    rejectLabel: 'Annuler',
    accept: () => {
      this.compteService.deleteCompte(this.id!).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Compte supprimé', detail: 'Le compte a bien été supprimé.' });
          setTimeout(() => this.router.navigate(['/comptes']), 1500);
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'La suppression a échoué.' });
        }
      });
    }
  });
}
}
