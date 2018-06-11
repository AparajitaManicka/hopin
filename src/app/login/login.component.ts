import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private appService: AppService, private router: Router, private flashMsgService: FlashMessagesService) {

  }

  ngOnInit() {
  }

  validateUser() {
    console.log("VALIDATING User")
    if (this.username == undefined || this.password == undefined) {
      this.flashMsgService.show("Please enter both Username and Password", { cssClass: 'alert-danger', timeout: 3000 })
    } else {
      this.appService.getUserId(this.username).subscribe(res => {
        console.log("RESPONSE" + JSON.stringify(res))
        this.appService.currentUserId = res.id;
        console.log("@Login SETTING USer id :" + this.appService.currentUserId);
        this.router.navigate(["/choice"]);
      })      
    }
  }
}