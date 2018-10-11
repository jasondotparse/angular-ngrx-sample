import { TodoItem } from './../models/appState.model';
import { Action } from '@ngrx/store';

export const SET_FEATURED = 'SET_FEATURED';

export class SetFeatured implements Action {
  readonly type = SET_FEATURED;
  constructor(public payload: TodoItem) {}
}

export type FeaturedItemActions =
  | SetFeatured;
