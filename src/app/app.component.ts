import { AppState, TodoItem } from './common/models/appState.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoListActions from './common/actions/todo-list.actions';
import * as FeaturedItemActions from './common/actions/featured-item.actions';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: any;
  featuredItem: TodoItem;
  items;

  constructor(private store: Store<AppState>, private db: AngularFirestore) {
    store.select(state => state.todoList).subscribe(res => {
      this.todoList = res;
    });

    store.select(state => state.featuredItem).subscribe(res => {
      this.featuredItem = res;
    });
  }

  ngOnInit() {
    this.items = this.db.collection('tasks').valueChanges();
    this.items.subscribe(res => {
      console.log(res);
    });
  }

  initializeTaskList(taskList) {

  }

  submitNewTask(evt) {
    this.store.dispatch(new TodoListActions.NewTask(evt));
  }

  deleteItem(evt) {
    this.store.dispatch(new TodoListActions.DeleteTask(evt));
  }

  setFeaturedItem(evt) {
    this.store.dispatch(new FeaturedItemActions.SetFeatured(evt));
  }

}
