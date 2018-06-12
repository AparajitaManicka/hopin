import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-bookaride',
  templateUrl: './bookaride.component.html',
  styleUrls: ['./bookaride.component.css']
})
export class BookarideComponent implements OnInit {
  showResults = false;
  leavingfrom: string;
  leavingto: string;
  date: string;
  availablerides: any;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
  }

  searchRides() {
    this.appService.searchRides(this.leavingfrom, this.leavingto, this.date).subscribe(res => {
      this.showResults = true;
      console.log("List of available rides:" + JSON.stringify(res));
      this.availablerides = res;
    });
  }

  bookaride(ride) {

    console.log("Booking the seat -> " + JSON.stringify(ride));
    ride.seats = ride.seats - 1;
    console.log("Subtracting the seat -> " + JSON.stringify(ride));
    this.appService.bookRide(ride).subscribe(res => {

    });

    var userseatconfirmation = {
      pickup: ride.pickup,
      dropoff: ride.dropoff,
      departure: ride.departure,
      price: ride.price,
      seats: 1,
      UserId: this.appService.currentUserId
    }

    this.appService.confirmTransaction(userseatconfirmation).subscribe(res => {

    });
  }
}
