import * as DeletedItemsActions from '../actions/deleted-items.actions';
import { Map, is, List, Set } from 'immutable';

export function DeletedItemsReducer(state = Set(),  action): Set<any> {
  switch (action.type) {
    case DeletedItemsActions.ADD:
      return state.add(action.payload);
    case DeletedItemsActions.EMPTY_TRASH:
      return Set();
    default:
      return state;
  }
}
