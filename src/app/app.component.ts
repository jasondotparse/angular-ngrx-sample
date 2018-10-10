import { AppState } from './common/models/appState.model';
import { Component } from '@angular/core';
import * as CounterActions from './common/actions/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select(state => state.mainDashboard.counter);
  }

  decrementCounter() {
    this.store.dispatch(new CounterActions.Decrement);
  }

  incrementCounter() {
    this.store.dispatch(new CounterActions.Increment);
  }
}
