import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Colour, Size } from './order';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      { name: 'John Doe', age: 23, colour: Colour.Red, size: Size.L }
    ];
    return {orders};
  }
}
