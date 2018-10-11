import { TodoItem } from './../models/appState.model';
export function FeaturedItemReducer(state: TodoItem = {
  task: '',
  comment: ''
},  action) {
  switch (action.type) {
    case 'SET_FEATURED':
      return action.payload;
    default:
      return state;
  }
}
