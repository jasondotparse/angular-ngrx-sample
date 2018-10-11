import * as todoListActions from '../actions/todo-list.actions';
import { Map, is, List, Set } from 'immutable';

const defaultState = Set.of(
  Map({ task: 'walk dog', comment: 'comment 1' }),
  Map({ task: 'get groceries', comment: 'comment 2'}),
  Map({ task: 'do laundry', comment: 'comment 3'})
);

export function TodoListReducer(state = defaultState,  action): Set<Map<string, string>> {
  switch (action.type) {
    case todoListActions.DELETE_TASK:
      const newIterable = state.filter(task => !task.equals(action.payload));
      return Set(newIterable);
    case todoListActions.NEW_TASK:
      return state.add(action.payload);
    default:
      return state;
  }
}
