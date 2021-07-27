import { EventEmitter } from '@angular/core';


export class NotificationService {
  notifier = new EventEmitter

  notify(message: string) {
    this.notifier.emit(message);
  }

}
