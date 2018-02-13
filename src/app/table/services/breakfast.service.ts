import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BreakfastService {

  private serviceUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) { }

  getData(): Observable<Order[]> {
    return this.http.get<Order[]>(this.serviceUrl);
  }
}

export interface Order {
  name: string;
  drink: string;
  main: string;
  side1: string;
  side2: string;
}
