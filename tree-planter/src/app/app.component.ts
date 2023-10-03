import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('1000ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'tree-planter';
  loginData = {
    name: '',
    password: '',
  };
  showButtons = true;
  showLoginForm = false;

  toggleLoginForm() {
    this.showButtons = false;
    setTimeout(() => {
      this.showLoginForm = true;
    }, 1000);
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.loginData);
    this.loginData = { name: '', password: '' };
    // You can add further logic, such as sending the form data to an API
  }
}
