import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private appService: AppService, private router: Router) {

  }

  ngOnInit() {
  }

  validateUser() {
    console.log("validating user")
    //this.appService.authenticateUser(this.username, this.password)
    this.appService.getUserId(this.username).subscribe(res => {
      console.log("RESPONSE" + JSON.stringify(res))
      this.appService.currentUserId = res.id;
      console.log("@Login SETTING USer id :" + this.appService.currentUserId)
    });
    this.router.navigate(["/choice"]);
  }
}