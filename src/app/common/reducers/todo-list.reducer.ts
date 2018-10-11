import * as todoListActions from '../actions/todo-list.actions';
import { Map, Seq, List } from 'immutable';

const defaultState = List.of(
  Map({ task: 'walk dog', comment: 'comment 1' }),
  Map({ task: 'get groceries', comment: 'comment 2'}),
  Map({ task: 'do laundry', comment: 'comment 3'})
);

export function TodoListReducer(state = defaultState,  action) {
  switch (action.type) {
    case 'DELETE_TASK':
      return state.filter(task => task.get(action.payload) !== action.payload);
    case 'NEW_TASK':
      return state.push(Map({ task: action.payload.task, comment: action.payload.comment}));
    default:
      return state;
  }
}
