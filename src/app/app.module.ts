import { firebaseConfig } from '../../firebaseConfig';
import { ApiService } from './services/api.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoListReducer } from './common/reducers/todo-list.reducer';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FeaturedItemReducer } from './common/reducers/featured-item.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    TodoListComponent,
    TodoItemComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatIconModule,
    FormsModule,
    StoreModule.forRoot({ todoList: TodoListReducer, featuredItem: FeaturedItemReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [
    AngularFirestore,
    AngularFireDatabase,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
