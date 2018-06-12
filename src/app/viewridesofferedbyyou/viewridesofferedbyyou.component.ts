import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-viewridesofferedbyyou',
  templateUrl: './viewridesofferedbyyou.component.html',
  styleUrls: ['./viewridesofferedbyyou.component.css']
})
export class ViewridesofferedbyyouComponent implements OnInit {
  viewRidesOfferedList: any;

  constructor(private appService: AppService, private flashMsgService: FlashMessagesService) {
    console.log("@ViewOfferedrides.. USER ID:" + appService.currentUserId)
    this.getRidesOffered()
  }

  ngOnInit() {
  }

  getRidesOffered() {
    this.appService.ridesOffered().subscribe(res => {
      console.log("RESPONSE for ridesOFfere:" + JSON.stringify(res))
      this.viewRidesOfferedList = res;
    });

  }

  deleteofferedride(cancelride) {
    console.log("RIDE to be deleted:" + JSON.stringify(cancelride))
    this.appService.deleteride(cancelride).subscribe(res => {
      console.log("RIDE Deleted and response:"+JSON.stringify(res));
      this.flashMsgService.show("Ride deleted successfully", { cssClass: 'alert-danger', timeout: 3000 });
      this.getRidesOffered();
    });

  }

}
