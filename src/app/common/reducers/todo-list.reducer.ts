import * as todoListActions from '../actions/todo-list.actions';

export function TodoListReducer(state = [
  { task: 'walk dog', comment: 'comment 1' },
  { task: 'get groceries', comment: 'comment 2'},
  { task: 'do laundry', comment: 'comment 3'}
],  action) {
  switch (action.type) {
    case 'DELETE_TASK':
      return state.filter(task => task.task !== action.payload);
    case 'NEW_TASK':
      return [ ...state, {task: action.payload.task, comment: action.payload.comment} ];
    default:
      return state;
  }
}
