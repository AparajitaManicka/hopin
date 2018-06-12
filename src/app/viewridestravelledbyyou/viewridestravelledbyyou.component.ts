import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-viewridestravelledbyyou',
  templateUrl: './viewridestravelledbyyou.component.html',
  styleUrls: ['./viewridestravelledbyyou.component.css']
})
export class ViewridestravelledbyyouComponent implements OnInit {
  viewRidesTravelledList: any;

  constructor(private appService: AppService) {
    console.log("@ViewOfferedrides.. USER ID:" + appService.currentUserId)
    this.getRidesTravelled()
  }
  
  ngOnInit() {
  }

  getRidesTravelled() {
    this.appService.ridesTravelled().subscribe(res => {
      console.log("RESPONSE for ridesOFfere:" + JSON.stringify(res))
      this.viewRidesTravelledList = res;
    });
  }

  deletetravelledride(cancelride) {
    console.log("RIDE to be deleted:" + JSON.stringify(cancelride))
    this.appService.deletetravel(cancelride).subscribe(res => {
      
    });
  }
}