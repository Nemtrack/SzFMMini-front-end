import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  errorMessage?: string;
  isLogin = false;

  constructor(private http: DataStorageService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
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
