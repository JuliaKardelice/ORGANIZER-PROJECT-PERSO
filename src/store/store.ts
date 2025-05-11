import { configureStore } from '@reduxjs/toolkit'
import todossReducers from "../reducer/todos/todosSlices"
// Exemple : import de tes futurs "slices" (réducteurs)
// import todosReducer from './features/todos/todosSlice'
//import notesReducer from './features/notes/notesSlice'
// import agendaReducer from './features/agenda/agendaSlice'

// Création du store
export const store = configureStore({
  reducer: {
    todos,
    todosSlice.reducer,
   // notes: notesReducer,
   /// agenda: agendaReducer,
  },
})

// Typage pour tout le projet : RootState et AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
