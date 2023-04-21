import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  userKey: string | null = window.sessionStorage.getItem('USER_KEY');
  tokenKey: string | null = window.sessionStorage.getItem('TOKEN_KEY')
  
  login(): void {
    this.route.navigate(['']);
  }

  register(): void {
    this.route.navigate(['register-page']);
  }

  constructor(private http: HttpClient, private route: Router, private tokenStorage: TokenStorageService) {}
}
