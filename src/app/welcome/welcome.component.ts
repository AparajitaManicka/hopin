import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private flashmsgservice: FlashMessagesService) { }

  ngOnInit() {
  }

}
