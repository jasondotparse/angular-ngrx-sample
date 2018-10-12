import { TodoItem } from './../models/appState.model';
import { Action } from '@ngrx/store';

export const ADD = 'ADD';
export const EMPTY_TRASH = 'EMPTY_TRASH';

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: TodoItem) {}
}

export class EmptyTrash implements Action {
  readonly type = EMPTY_TRASH;
  constructor() {}
}

export type DeletedItemsActions =
  | EmptyTrash
  | Add;
