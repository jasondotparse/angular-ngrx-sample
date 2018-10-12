export interface TodoItem {
  task: string;
  comment: string;
  saved: boolean;
  id: string;
}

export interface AppState {
  todoList: Array<TodoItem>;
  featuredItem: TodoItem;
  deletedItems: Array<TodoItem>;
}
