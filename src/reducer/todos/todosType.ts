export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
}

export const defaultTodo: Todo = {
  id: 0,
  title: '',
  description: '',
  createdAt: '',
  updatedAt: '',
  completed: false,
  tags: []
}