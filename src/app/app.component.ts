import { ApiService } from './services/api.service';
import { AppState, TodoItem } from './common/models/appState.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoListActions from './common/actions/todo-list.actions';
import * as FeaturedItemActions from './common/actions/featured-item.actions';
import * as DeletedItemsActions from './common/actions/deleted-items.actions';
import { AngularFirestore } from '@angular/fire/firestore';
import { Map, Set } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: any;
  featuredItem: TodoItem;
  deletedItems: any;

  constructor(private store: Store<AppState>, private db: AngularFirestore, private api: ApiService) {
    store.select(state => state.todoList).subscribe(res => {
      this.todoList = res;
    });

    store.select(state => state.featuredItem).subscribe(res => {
      this.featuredItem = res;
    });

    store.select(state => state.deletedItems).subscribe(res => {
      this.deletedItems = res;
    });
  }

  ngOnInit() {
    this.api.getTasks().subscribe(res => {
      this.initializeTaskList(res);
    });
  }

  initializeTaskList(arr) {
    const mapArr = arr.map(obj => Map({ ...obj, saved: true }));
    const mapSet = Set.of(...mapArr);
    this.store.dispatch(new TodoListActions.InitializeTaskList(mapSet));
  }

  submitNewTask(evt) {
    const newID = Math.round(Math.random() * 100000);
    this.store.dispatch(new TodoListActions.NewTask(evt));
  }

  deleteItem(evt) {
    this.store.dispatch(new TodoListActions.DeleteTask(evt));
    this.store.dispatch(new DeletedItemsActions.Add(evt));
  }

  setFeaturedItem(evt) {
    this.store.dispatch(new FeaturedItemActions.SetFeatured(evt));
  }

  saveChanges() {
    // save all unsaved items to database. Then set their saved prop to true.
    const unsaved = this.todoList.filter(todo => !todo.get('saved'));
    this.api.addTasks(unsaved);
    this.store.dispatch(new TodoListActions.SetAllToSaved());

    // for all deleted items, delete them on firebase. Then empty the trash.
    this.api.deleteTasks(this.deletedItems);
    this.store.dispatch(new DeletedItemsActions.EmptyTrash());
  }

}
