import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  orderArray = [];

  pass(orderArray) {
    this.orderArray = orderArray;
  }

  take() {
    return this.orderArray;
  }
}
