import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './unitsSlice.js'
import favoritesReducer from './favoritesSlice.js'
import { loadPersistedState, savePersistedState } from '../utils/storage.js'

const persisted = typeof window !== 'undefined' ? loadPersistedState() : undefined

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    favorites: favoritesReducer
  },
  preloadedState: persisted
})

// Persist only what the assignment requires (units + favorites)
store.subscribe(() => {
  const state = store.getState()
  savePersistedState({
    units: state.units,
    favorites: state.favorites
  })
})
