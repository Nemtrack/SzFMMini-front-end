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
    throw new Error('Method not implemented.');
  }

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
    }, 600);
  }

  onSubmit() {
    console.log('Form submitted:', this.loginData);
    this.loginData = { name: '', password: '' };
  }
}
