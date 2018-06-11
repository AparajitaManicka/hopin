import { Component } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>This is my first angular component</h1>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HopIn';
  constructor(private flashmsgservice: FlashMessagesService) {

  }
}
