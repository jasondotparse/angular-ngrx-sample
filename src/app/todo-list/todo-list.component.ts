import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../common/models/appState.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: any;
  @Output() deleteItem = new EventEmitter();
  @Output() setFeatured = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
