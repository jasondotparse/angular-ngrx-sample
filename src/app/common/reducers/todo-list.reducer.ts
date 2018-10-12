import * as todoListActions from '../actions/todo-list.actions';
import { Map, is, List, Set } from 'immutable';

export function TodoListReducer(state = Set.of(Map({})),  action): Set<any> {
  switch (action.type) {
    case todoListActions.DELETE_TASK:
      const newIterable = state.filter(task => !task.equals(action.payload));
      return Set(newIterable);
    case todoListActions.NEW_TASK:
      const newTask = action.payload.set('saved', false);
      return state.add(newTask);
    case todoListActions.INITIALIZE_TASK_LIST:
      return action.payload;
    default:
      return state;
  }
}
