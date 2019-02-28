import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Details} from './details';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [
      { id: 1, name: 'John Doe', email: 'lulz.lolz@mail.com', amount: 5 }
    ];
    return {data};
  }

  genId(data: Details[]): number {
    return data.length > 0 ? Math.max(...data.map(details => details.id)) + 1 : 1;
  }
}
