import * as todoListActions from '../actions/todo-list.actions';
import { Map, is, List } from 'immutable';

const defaultState = List.of(
  Map({ task: 'walk dog', comment: 'comment 1' }),
  Map({ task: 'get groceries', comment: 'comment 2'}),
  Map({ task: 'do laundry', comment: 'comment 3'})
);

export function TodoListReducer(state = defaultState,  action): List<Map<string, string>> {
  switch (action.type) {
    case 'DELETE_TASK':
      const newIterable = state.filter(task => !task.equals(action.payload));
      return List(newIterable);
    case 'NEW_TASK':
      return state.push(action.payload);
    default:
      return state;
  }
}
