import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

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

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  forRegistration() {

    let newUser = {
      firstname: this.firstname,
      lastname: this.lastname,
      licensenumber: this.licensenumber,
      email: this.email,
      username: this.username,
      password: this.password
    }

    console.log("UsER to be registered:"+JSON.stringify(newUser))
    this.appService.registerNewUser(newUser);

  }

}
