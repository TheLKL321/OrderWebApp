import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Colour, Order, Size} from '../order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  submitted = false;
  model = new Order('', null, null, null);

  sizeArray = Object.keys(Size)
    .filter(key => typeof Size[key] !== 'number')
    .map(key => (Size[key]));

  colourArray = Object.keys(Colour)
    .filter(key => typeof Colour[key] !== 'number')
    .map(key => (Colour[key]));

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

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