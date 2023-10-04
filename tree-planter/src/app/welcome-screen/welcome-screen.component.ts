import { Component, OnInit } from '@angular/core';
import { AppCreationService } from '../shared/app-creation-handler.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  appCreated = false;

  constructor(private creationHandler: AppCreationService) {}

  ngOnInit(): void {
    this.creationHandler.appCreationEmitter.subscribe((status) => {
      this.appCreated = status;
    });
  }
}
