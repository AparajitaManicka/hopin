import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  firstname: string;
  lastname: string;
  licensenumber: string;
  email: string;
  username: string;
  password: string;
  ticks: number = 5;
  timer: any;
  triggerTimer: any;

  constructor(private appService: AppService, private router: Router, private flashMsgService: FlashMessagesService) { }

  ngOnInit() {
    this.timer = Observable.interval(1000);
  }

  forRegistration() {


    if (this.firstname == undefined || this.lastname == undefined || this.licensenumber == undefined || this.email == undefined || this.username == undefined || this.password == undefined) {
      this.flashMsgService.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 3000 });
    } else if (!this.validateemail(this.email)) {
      this.flashMsgService.show("Please enter a valid email id", { cssClass: 'alert-danger', timeout: 3000 });
    }

    else {
      let newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        licensenumber: this.licensenumber,
        email: this.email,
        username: this.username,
        password: this.password
      }

      console.log("UsER to be registered:" + JSON.stringify(newUser))
      this.appService.registerNewUser(newUser);
      this.flashMsgService.show("User has been registered successfully. Please login to continue.", { cssClass: 'alert-success', timeout: 6000 });

      this.firstname = "";
      this.lastname = "";
      this.licensenumber = ""
      this.email = ""
      this.username = "";
      this.password = "";

      this.countdown();
    }
  }

  validateemail(emailid) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailid).toLowerCase());
  }

  countdown() {
    this.triggerTimer = this.timer.subscribe(t => {
      console.log(this.ticks)
      this.ticks--;
      if (this.ticks === 0) {
        this.ticks = 10;
        this.router.navigate(['/welcome']);
      }
    })
  }
  ngOnDestroy() {
    this.triggerTimer.unsubscribe();
  }
}