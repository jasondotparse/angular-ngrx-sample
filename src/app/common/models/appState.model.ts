export interface TodoItem {
  task: string;
  comment: string;
}

export interface AppState {
  todoList: Array<TodoItem>;
}
