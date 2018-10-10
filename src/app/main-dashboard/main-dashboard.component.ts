// main-dashboard.component.ts
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  increment = new EventEmitter();
  decrement = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
