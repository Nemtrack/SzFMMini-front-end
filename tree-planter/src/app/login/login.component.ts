import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: { username: string; password: string } = {
    username: '',
    password: '',
  };
  errorMessage?: string;
  isLogin: boolean = false;

  constructor(private router: Router, private http: DataStorageService) {}

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): void {
    if (this.router.url.includes('login')) {
      this.isLogin = true;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (!this.isLogin) {
        console.log('Sign Up Form submitted:', this.loginData);
        this.http.registerUser(this.loginData).subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            this.errorMessage = error.error.message;
          },
        });
      } else {
        console.log('Login Form submitted:', this.loginData);
        this.http.loginUser(this.loginData).subscribe({
          next: (data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            console.log(data.token);
            this.router.navigate(['/trees']);
          },
          error: (error) => {
            this.errorMessage = error.error.message;
            console.log(error.error.message);
          },
        });
      }
      this.loginData = { username: '', password: '' };
    }
  }
}
