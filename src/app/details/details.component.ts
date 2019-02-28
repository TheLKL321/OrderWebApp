import { Component, OnInit } from '@angular/core';
import {Details} from '../details';
import {SummaryService} from '../summary.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private model = new Details(null, null, null, this.summaryService.take().length);

  data: Details[];

  private confirmed = false;

  constructor(
    private summaryService: SummaryService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  placeOrder() {
    this.confirmed = true;
    this.dataService.pushData(this.model as Details)
      .subscribe(details => {
        this.data.push(details);
      });
    this.summaryService.clear();
    this.model.name = null;
    this.model.email = null;
  }
}
