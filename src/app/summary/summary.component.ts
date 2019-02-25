import {Component, OnInit} from '@angular/core';
import {SummaryService} from '../summary.service';
import {Colour, Order, Size} from '../order';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  orderArray = [new Order('John Doe', 29, Colour.Red, Size.M)];

  constructor(
    private summaryService: SummaryService
  ) { }

  ngOnInit() {
    this.orderArray = this.summaryService.take();
  }

}
