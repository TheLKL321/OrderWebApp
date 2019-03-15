import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Colour, Order, Size} from '../order';
import {SummaryService} from '../summary.service';
import {DataService} from '../data.service';
import {Details} from '../details';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public model = new Order('', null, null, null);

  public sizeArray = Object.keys(Size)
    .filter(key => typeof Size[key] !== 'number')
    .map(key => (Size[key]));

  public colourArray = Object.keys(Colour)
    .filter(key => typeof Colour[key] !== 'number')
    .map(key => (Colour[key]));

  orderArray = [];

  data: Details[];

  constructor(
    private summaryService: SummaryService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.orderArray = this.summaryService.take();
    this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  onSubmit() {
    if (this.orderArray.length < 15) {
      const temp = new Order(this.model.engraving, this.model.age, this.model.colour, this.model.size);
      this.orderArray.push(temp);
    }
  }

  deleteOrder(i) {
    this.orderArray.splice(i, 1);
  }

  goToSummary() {
    this.summaryService.pass(this.orderArray);
  }
}

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }
}
