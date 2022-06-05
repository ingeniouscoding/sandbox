import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getToken() {
    this.http.get(this.url + 'sanctum/csrf-cookie').subscribe();
  }

  login() {
    this.http.post(this.url + 'login', {}).subscribe();
  }
}
