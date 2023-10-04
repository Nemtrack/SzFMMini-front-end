import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCreationService {
  appCreationEmitter: EventEmitter<boolean> = new EventEmitter();

  createApp() {
    this.appCreationEmitter.next(true);
  }
}
