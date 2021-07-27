import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden',style({
        opacity: 0,
        top: '-100vh'
      })),
      state('visible',style({
        opacity: 1,
        top: '20vh'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string | undefined
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.subscribe(message=>{
      this.message = message
      this.snackVisibility = 'visible'
      timer(5000).subscribe(timer => this.snackVisibility = 'hidden')
    })
  }

}
