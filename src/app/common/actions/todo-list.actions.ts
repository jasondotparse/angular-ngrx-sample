import { TodoItem } from './../models/appState.model';
import { Action } from '@ngrx/store';
import { Map } from 'immutable';

export const NEW_TASK = 'NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export class NewTask implements Action {
  readonly type = NEW_TASK;
  constructor(public payload: Map<string, string>) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: Map<string, string>) {}
}

export type TodoListActions =
  | NewTask
  | DeleteTask;
