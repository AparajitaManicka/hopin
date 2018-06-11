import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';

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

  latitude: number = 28.4865289;
  longitude: number = -81.3906764;
  zoom: number = 4;
  public searchControl: FormControl;

  constructor(private appService: AppService, private mapsapiloader: MapsAPILoader, private ngZone: NgZone) {
    console.log("@offerride.. USER ID:" + appService.currentUserId)
  }

  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.chooseFromTo();

    this.mapsapiloader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.pickupElem.nativeElement, { types: ["address"] });
        autocomplete.addListener("place changed", () => {
          console.log("autocomplete1:" + autocomplete);
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          })
        })

        let autocomplete2 = new google.maps.places.Autocomplete(this.dropoffElem.nativeElement, { types: ["address"] });
        autocomplete2.addListener("place changed", () => {
          console.log("autocomplete2:" + autocomplete);
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete2.getPlace();
            console.log("place2" + place);
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          })
        })
      }
    )
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

  @ViewChild('pickupLocation') public pickupElem: ElementRef;

  @ViewChild('dropOffLocation') public dropoffElem: ElementRef;

  chooseFromTo() {
    /*     this.latitude = event.coords.lat;
        this.longitude = event.coords.lng; */

    console.log("from to");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}