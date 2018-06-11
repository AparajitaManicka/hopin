import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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

  constructor(private appService: AppService, private router: Router, private flashMsgService: FlashMessagesService) { }

  ngOnInit() {
  }

  forRegistration() {


    if (this.firstname == undefined || this.lastname == undefined || this.licensenumber == undefined || this.email == undefined || this.username == undefined || this.password == undefined) {
      this.flashMsgService.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 3000 });
    } else if (!this.validateemail(this.email)) {
      this.flashMsgService.show("Please enter a valid email id", { cssClass: 'alert-danger', timeout: 3000 });
    } else {
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
      this.flashMsgService.show("User has been registered successfully", { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(["/choice"]);
    }
  }

  validateemail(emailid) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailid).toLowerCase());
  }

}
