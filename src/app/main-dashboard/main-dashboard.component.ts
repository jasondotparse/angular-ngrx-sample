// main-dashboard.component.ts
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
