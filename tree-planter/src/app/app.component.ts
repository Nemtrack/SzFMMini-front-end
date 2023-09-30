import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tree-planter';
  loginData = {
    name: '',
    password: '',
  };
  showLoginForm = false;
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.loginData);
    this.loginData = { name: '', password: '' };
    // You can add further logic, such as sending the form data to an API
  }
}
