import { TodoItem } from './../models/appState.model';
import { Action } from '@ngrx/store';

export const NEW_TASK = 'NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export class NewTask implements Action {
  readonly type = NEW_TASK;
  constructor(public payload: TodoItem) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: string) {}
}


export type TodoListActions =
  | NewTask
  | DeleteTask;
