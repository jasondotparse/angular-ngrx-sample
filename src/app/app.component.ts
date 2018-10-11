import { AppState, TodoItem } from './common/models/appState.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoListActions from './common/actions/todo-list.actions';
import * as FeaturedItemActions from './common/actions/featured-item.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<TodoItem>;
  featuredItem: TodoItem;

  constructor(private store: Store<AppState>) {
    store.select(state => state.todoList).subscribe(res => {
      this.todoList = res;
    });

    store.select(state => state.featuredItem).subscribe(res => {
      this.featuredItem = res;
    });
  }

  submitNewTask(evt) {
    this.store.dispatch(new TodoListActions.NewTask(evt));
  }

  deleteItem(evt) {
    this.store.dispatch(new TodoListActions.DeleteTask(evt));
  }

  setFeaturedItem(evt: TodoItem) {
    this.store.dispatch(new FeaturedItemActions.SetFeatured(evt));
  }

}
