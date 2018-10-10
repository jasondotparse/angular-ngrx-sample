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
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    store.select(state => state.mainDashboard.counter).subscribe(res => {
      this.counter = res;
    });
  }

  decrementCounter() {
    this.store.dispatch(new CounterActions.Decrement);
  }

  incrementCounter() {
    this.store.dispatch(new CounterActions.Increment);
  }
}
