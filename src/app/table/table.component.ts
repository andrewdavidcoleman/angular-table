import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BreakfastService } from './services/breakfast.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { DataSource } from '@angular/cdk/collections';
import { Order } from './services/breakfast.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource = new OrderDataSource(this.breakfastService);
  displayedColumns = ['customer', 'drink', 'main', 'side1', 'side2'];

  constructor(private breakfastService: BreakfastService) {  }

  ngOnInit() {
    console.log('This is from the ngOnInit() in the Table Component')
  }

}

export class OrderDataSource extends DataSource<any> {
  constructor(private breakfastService: BreakfastService) {
    super();
  }
  connect(): Observable<Order[]> {
    return this.breakfastService.getData();
  }
  disconnect() {}
}

// export const ELEMENT_DATA: Element[] = [
//   {planId: 1, planStatus: 7},
//   {planId: 2, planStatus: 4},
//   {planId: 3, planStatus: 2},
// ];
