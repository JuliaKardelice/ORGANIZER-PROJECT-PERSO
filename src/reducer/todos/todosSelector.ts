import { type RootState } from "../../store/store";

export const selectTodosTitle = (state : RootState)=> state.Todos.title ;
export const selectTodosTags = (state : RootState)=> state.Todos.tags ;
export const selectTodosCompleted = (state : RootState)=> state.Todos.completed ;
export const selectTodosDescription = (state : RootState)=> state.Todos.description ;
