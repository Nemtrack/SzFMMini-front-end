import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(private http: DataStorageService) {}

  ngOnInit(): void {
    this.http.getTotalUserCount().subscribe((data) => {
      this.totalUsers = data.totalUsers;
    });
  }

  title = 'tree-planter';
  loginData = {
    username: '',
    password: '',
  };
  showButtons = true;
  showLoginForm = false;
  totalUsers?: number;
  isLogin = false;

  buttonsSwitchWithDelay(bool: boolean) {
    this.showButtons = bool;
    setTimeout(() => {
      this.showLoginForm = !bool;
    }, 600);
  }

  formSwitchWithDelay(bool: boolean) {
    this.showLoginForm = bool;
    setTimeout(() => {
      this.showButtons = !bool;
    }, 600);
  }

  toggleLoginForm() {
    this.buttonsSwitchWithDelay(false);
    this.isLogin = true;
  }

  toggleSignUpForm() {
    this.buttonsSwitchWithDelay(false);
    this.isLogin = false;
  }

  onSubmit() {
    if (!this.isLogin) {
      console.log('Sign Up Form submitted:', this.loginData);
      this.loginData = { username: '', password: '' };
      this.http.registerUser(this.loginData).subscribe((data) => {
        console.log(data);
      });
      this.formSwitchWithDelay(false);
    } else {
      console.log('Login Form submitted:', this.loginData);
      this.loginData = { username: '', password: '' };
    }
  }
}
