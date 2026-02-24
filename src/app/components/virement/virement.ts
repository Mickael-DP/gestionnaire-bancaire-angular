import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import { Observable } from 'rxjs';
import { Compte } from '../../models/compte.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-virement',
  imports: [ReactiveFormsModule, CommonModule],
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

  constructor(private compteService: CompteService) {}

  ngOnInit(): void {
     this.comptes$ = this.compteService.listerComptes();
  }

  effectuerVirement(): void {
    if (this.virementForm.valid) {
      const { idSource, idDestination, montant } = this.virementForm.getRawValue();
      this.compteService.virement(idSource!, idDestination!, montant!).subscribe({
        next: () => {
          alert('Virement effectué avec succès');
          this.virementForm.reset();
        },
        error: (err) => {
          alert('Erreur lors du virement : ' + err.message);
        },
      });
    }
  }
}
