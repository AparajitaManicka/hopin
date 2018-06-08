import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-offeraride',
  templateUrl: './offeraride.component.html',
  styleUrls: ['./offeraride.component.css']
})
export class OfferarideComponent implements OnInit {

  pickup: string;
  dropoff: string;
  departure: string;
  price: string;
  seats: string;
  comment: string;

  constructor(private appService: AppService) {
      console.log("@offerride.. USER ID:"+appService.currentUserId)

   }

  ngOnInit() {
  }

  createRide() {

    let newRide = {
      pickup: this.pickup,
      dropoff: this.dropoff,
      departure: this.departure,
      price: this.price,
      seats: this.seats,
      comment: this.comment,
      UserId: this.appService.currentUserId
    }

    console.log("New Ride Details:" + JSON.stringify(newRide))
    this.appService.registerNewRide(newRide);

  }
}
