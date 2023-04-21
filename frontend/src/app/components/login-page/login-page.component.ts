import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{
form: any = {
  username: null,
  password: null
}

loginForm!:FormGroup;
constructor(
  private authService: AuthServiceService,
  private tokenStorage: TokenStorageService,
  private http: HttpClient,
  private router: Router,
  private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.authService.isLoggedIn = true;
      this.router.navigate([this.authService.redirectUrl]);
    }

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logout() {
    this.tokenStorage.signOut();
  }

  onSubmit() {
    const {username, password} = this.form;

    this.http.post<LoginPostData>("https://localhost:7086/api/Login/login", { username, password }).subscribe(data => {
      this.tokenStorage.saveToken(data.id_token);
      this.tokenStorage.saveUser(data.id);
      this.router.navigate([this.authService.redirectUrl]);
      window.location.reload();
    })
  }
}

export interface LoginPostData {
  id_token: string;
  id: number;
}