import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte, CompteCreation } from '../../../shared/models/compte.model';


@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8080/api/comptes';

  constructor(private http: HttpClient) {}

  listerComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.apiUrl);
  }

  consulterCompte(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.apiUrl}/${id}`);
  }

  creerCompte(compte: CompteCreation): Observable<Compte> {
    return this.http.post<Compte>(this.apiUrl, compte);
  }

  deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deposer(id: number, montant: number): Observable<Compte> {
    return this.http.put<Compte>(`${this.apiUrl}/${id}/depot`, { montant });
  }

  retirer(id: number, montant: number): Observable<Compte> {
    return this.http.put<Compte>(`${this.apiUrl}/${id}/retrait`, { montant });
  }

  virement(idSource: number, idDestination: number, montant: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/virement`, { idSource, idDestination, montant });
  }
}
