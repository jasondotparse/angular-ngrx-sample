import { TodoItem } from './../models/appState.model';
import { Action } from '@ngrx/store';

export const ADD = 'ADD';

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: TodoItem) {}
}

export type DeletedItemsActions =
  | Add;
