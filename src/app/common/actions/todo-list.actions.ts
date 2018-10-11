import { TodoItem } from './../models/appState.model';
import { Action } from '@ngrx/store';
import { Map } from 'immutable';

export const NEW_TASK = 'NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const INITIALIZE_TASK_LIST = 'INITIALIZE_TASK_LIST';

export class NewTask implements Action {
  readonly type = NEW_TASK;
  constructor(public payload: Map<string, string>) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: Map<string, string>) {}
}

export class InitializeTaskList implements Action {
  readonly type = INITIALIZE_TASK_LIST;
  constructor(public payload: any) {}
}

export type TodoListActions =
  | NewTask
  | DeleteTask;
