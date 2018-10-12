import { Map } from 'immutable';
import { TodoItem } from './../models/appState.model';

const defaultState = Map({task: '', comment: ''});

export function FeaturedItemReducer(state = defaultState,  action): Map<string, string> {
  switch (action.type) {
    case 'SET_FEATURED':
      return action.payload;
    default:
      return state;
  }
} 
