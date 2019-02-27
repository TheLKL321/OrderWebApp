import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      { name: 'John Doe', email: 'lulz.lolz@mail.com', amount: 5 }
    ];
    return {orders};
  }
}
