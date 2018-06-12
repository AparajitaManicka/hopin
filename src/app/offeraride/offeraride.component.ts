import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
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
  // initial center position for the map
  lat: number = 28.4865289;
  lng: number = -80.3906764;

  fromLat: number;
  fromLong: number
  dropLat: number;
  dropLong: number;
  zoom: number = 4;
  public searchControl: FormControl;

  ticks: number = 5;
  timer: any;
  triggerTimer: any;

  constructor(private appService: AppService, private router: Router, private flashMsgService: FlashMessagesService, private mapsapiloader: MapsAPILoader, private ngZone: NgZone) {
    console.log("@offerride.. USER ID:" + appService.currentUserId)
  }

  ngOnInit() {
    this.timer = Observable.interval(1000);

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
            this.fromLat = place.geometry.location.lat();
            this.fromLong = place.geometry.location.lng();
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
            this.dropLat = place.geometry.location.lat();
            this.dropLong = place.geometry.location.lng();
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
    this.flashMsgService.show("Ride posted successfully", { cssClass: 'alert-danger', timeout: 3000 });
    this.countdown();
  }

  @ViewChild('pickupLocation') public pickupElem: ElementRef;
  @ViewChild('dropOffLocation') public dropoffElem: ElementRef;

  chooseFromTo() {
    /*     this.latitude = event.coords.lat;
        this.longitude = event.coords.lng; */
    //this.calcNewRoute(27.9944116,-82.5943676,30.3446913,-81.9633031);
    console.log("from to");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  calcNewRoute() {
    console.log("CALC new route:")
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var latlng = new google.maps.LatLng(39.305, -76.617);
    var map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });

    

    var start = new google.maps.LatLng(this.fromLat, this.fromLong);
    var end = new google.maps.LatLng(this.dropLat, this.dropLong);

    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };

/*     directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
 */
  }



  countdown() {
    this.triggerTimer = this.timer.subscribe(t => {
      console.log(this.ticks)
      this.ticks--;
      if (this.ticks === 0) {
        this.ticks = 5;
        this.router.navigate(['/choice']);
      }
    })
  }
  ngOnDestroy() {
    this.triggerTimer.unsubscribe();
  }
}