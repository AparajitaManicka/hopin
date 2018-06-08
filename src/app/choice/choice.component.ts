import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private appService: AppService) {
    console.log("@choice.. USER ID:"+appService.currentUserId)
   }

  ngOnInit() {
  }

}
