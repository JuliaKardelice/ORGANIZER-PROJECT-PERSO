import { type RootState } from "../../store/store";


export const selectTodos = (state: RootState) => state.todos.todos;

export const selectTodoById = (id: number) => (state: RootState) =>
  state.todos.todos.find((todo) => todo.id === id);
/*
export const selectTodosTitle = (state : RootState)=> state.Todos.title ;
export const selectTodosTags = (state : RootState)=> state.Todos.tags ;
export const selectTodosCompleted = (state : RootState)=> state.Todos.completed ;
export const selectTodosDescription = (state : RootState)=> state.Todos.description ;


*/