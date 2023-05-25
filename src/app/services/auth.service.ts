import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    
    var test = document.querySelector('.testlog');
    test?.classList.add('d-none')
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'daroga@gmail.com' && password === '1') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Daroga', email: 'daroga@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
