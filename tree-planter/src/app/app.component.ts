import { Component, OnInit } from '@angular/core';
import { AppCreationService } from './shared/app-creation-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private creationHandler: AppCreationService) {}

  appCreated?: boolean;

  ngOnInit(): void {
    this.creationHandler.createApp();
  }
}
