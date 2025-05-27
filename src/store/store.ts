import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import todosReducer from '../reducer/todos/todosSlices'

const persistConfig = {
  key: 'todos',
  storage
}

const persistedTodosReducer = persistReducer(persistConfig, todosReducer)

const store = configureStore({
  reducer: {
    todos: persistedTodosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export default store
