import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Details} from './details';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'api/data';

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Details[]> {
    return this.http.get<Details[]>(this.dataUrl).pipe(catchError(this.handleError<any>('getData')));
  }

  pushData(details: Details): Observable<Details> {
      return this.http.post<Details>(this.dataUrl, details, httpOptions).pipe(catchError(this.handleError<any>('getData')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
