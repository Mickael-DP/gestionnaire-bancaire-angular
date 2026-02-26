import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.getRawValue();
      this.authService.login(credentials.email, credentials.password).subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/comptes']);
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Échec de la connexion. Veuillez vérifier vos identifiants.');
        },
      });
    }
  }
}
