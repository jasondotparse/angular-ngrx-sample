import { AppState, TodoItem } from './common/models/appState.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoListActions from './common/actions/todo-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<TodoItem>;

  constructor(private store: Store<AppState>) {
    store.select(state => state.todoList).subscribe(res => {
      this.todoList = res;
    });
  }

  submitNewTask(evt) {
    this.store.dispatch(new TodoListActions.NewTask(evt));
  }

  deleteItem(evt) {
    this.store.dispatch(new TodoListActions.DeleteTask(evt));
  }

}
