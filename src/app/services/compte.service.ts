import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.model';

@Injectable({
    providedIn: 'root'
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
}