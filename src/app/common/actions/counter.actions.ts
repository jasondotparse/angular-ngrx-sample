import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export class Increment implements Action {
  readonly type = INCREMENT;
  constructor() {}
}

export class Decrement implements Action {
  readonly type = DECREMENT;
  constructor() {}
}

export type CounterActions = | Increment | Decrement;
