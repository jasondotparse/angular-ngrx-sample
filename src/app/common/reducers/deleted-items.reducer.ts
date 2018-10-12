import * as DeletedItemsActions from '../actions/deleted-items.actions';
import { Map, is, List, Set } from 'immutable';

export function DeletedItemsReducer(state = Set.of(Map({})),  action): Set<any> {
  switch (action.type) {
    case DeletedItemsActions.ADD:
      return state.add(action.payload);
    default:
      return state;
  }
}
