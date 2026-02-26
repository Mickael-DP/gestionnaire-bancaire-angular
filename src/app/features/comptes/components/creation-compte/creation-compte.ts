import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CompteService } from '../../services/compte.service';

@Component({
  selector: 'app-creation-compte',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './creation-compte.html',
  styleUrl: './creation-compte.css',
})
export class CreationCompte {

  compteForm = new FormGroup({
    titulaire: new FormControl<string>('', Validators.required),
    type: new FormControl<string>('', Validators.required)
  });

  constructor(private router: Router, private compteService: CompteService) { }

  onSubmit(): void {
    if (this.compteForm.valid) {
      const newCompte = this.compteForm.getRawValue();
      this.compteService.creerCompte(newCompte).subscribe(() => {
        this.router.navigate(['/comptes']);
      });
    }
  }
}
