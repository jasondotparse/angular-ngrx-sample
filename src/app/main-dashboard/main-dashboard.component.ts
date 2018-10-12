import { Map } from 'immutable';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  @Output() submitNewTask = new EventEmitter();

  task;
  comment;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.task && this.comment) {
      this.submitNewTask.emit(Map({ task: this.task, comment: this.comment }));
    }
  }
}
