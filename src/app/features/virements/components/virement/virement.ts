import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Compte } from '../../../../shared/models/compte.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CompteService } from '../../../comptes/services/compte.service';

@Component({
  selector: 'app-virement',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, ToastModule,],
  providers: [MessageService],
  templateUrl: './virement.html',
  styleUrl: './virement.css',
})
export class Virement implements OnInit {
  virementForm = new FormGroup({
    idSource: new FormControl<number | null>(null, Validators.required),
    idDestination: new FormControl<number | null>(null, Validators.required),
    montant: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
  });

  comptes$: Observable<Compte[]> | null = null;

  constructor(private compteService: CompteService, private messagerieService: MessageService) { }

  ngOnInit(): void {
    this.comptes$ = this.compteService.listerComptes();
  }

  effectuerVirement(): void {
    if (this.virementForm.valid) {
      const { idSource, idDestination, montant } = this.virementForm.getRawValue();
      this.compteService.virement(idSource!, idDestination!, montant!).subscribe({
        next: () => {
          this.messagerieService.add({ severity: 'success', summary: 'Virement réussi', detail: `Virement de ${montant}€ effectué avec succès.` });
          this.virementForm.reset();
        },
        error: (err) => {
          this.messagerieService.add({ severity: 'error', summary: 'Erreur de virement', detail: `Le virement a échoué : ${err.error.message || err.message}` });
        },
      });
    }
  }
}
