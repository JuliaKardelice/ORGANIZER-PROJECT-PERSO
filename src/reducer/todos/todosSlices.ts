

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: number
  title: string
  completed: boolean
  tags : string
}

type TodosState = {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: []
}

// 🛠 Fonction utilitaire
function getNextId(todos: Todo[]): number {
  if (todos.length === 0) return 1
  const maxId = Math.max(...todos.map(todo => todo.id))
  return maxId + 1
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const id = getNextId(state.todos)
      const newTodo: Todo = {
        id,
        title: action.payload,
        completed: false,
        tags : action.payload
      }
      state.todos.push(newTodo)
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    /***updateTodo(state, action: PayloadAction<Partial<Todo> & { id: number }>) {
  const index = state.todos.findIndex(todo => todo.id === action.payload.id)
  if (index !== -1) {
    state.todos[index] = {
      ...state.todos[index],
      ...action.payload
    }
  } */
    updateTodo(state, action: PayloadAction<Partial<Todo> & { id: number }>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      if (index !== -1) {
        state.todos[index] = {
          ...state.todos[index],
          ...action.payload
        }
      }
    }
  }
})

export const { addTodo, toggleTodo, removeTodo , updateTodo} = todosSlice.actions
export default todosSlice.reducer
