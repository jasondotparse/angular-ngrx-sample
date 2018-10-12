export interface TodoItem {
  task: string;
  comment: string;
  saved: boolean;
}

export interface AppState {
  todoList: Array<TodoItem>;
  featuredItem: TodoItem;
}
