import { Component, OnInit } from '@angular/core';
import {Details} from '../details';
import {SummaryService} from '../summary.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  model = new Details(null, null);

  confirmed = false;

  constructor(
    private summaryService: SummaryService
  ) { }

  ngOnInit() {
  }

  placeOrder() {
    this.confirmed = true;
    this.summaryService.clear();
    this.model.name = null;
    this.model.email = null;
  }
}
