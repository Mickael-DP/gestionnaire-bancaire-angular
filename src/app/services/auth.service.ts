import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  
  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password });
  }

register(user: { firstname: string, lastname: string, email: string, password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, user);
}

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
  }

 getMe(): Observable<any> {
  return this.http.get(`${this.apiUrl}/me`);
}

}
