import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm = new FormGroup({
    firstname: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    lastname: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.getRawValue();
      const newUser = {

        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: userData.password,
      };

      this.authService.register(newUser).subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/comptes']);
        },
        error: (err) => {
          console.error('Registration failed', err);
          alert("Échec de l'inscription. Veuillez réessayer.");
        },
      });
    }
  }
}
