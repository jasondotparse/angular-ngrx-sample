import * as CounterActions from './../actions/counter.actions';
export function MainDashboardReducer(state = {
  counter: 0
},  action) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return { counter: state.counter + 1 };
    case CounterActions.DECREMENT:
    return { counter: state.counter - 1 };
    default:
      return state;
  }
}