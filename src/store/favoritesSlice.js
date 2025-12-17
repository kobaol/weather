import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    cityIds: []
  },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload
      if (state.cityIds.includes(id)) {
        state.cityIds = state.cityIds.filter((x) => x !== id)
      } else {
        state.cityIds.push(id)
      }
    },
    setFavorites(state, action) {
      state.cityIds = action.payload
    }
  }
})

export const { toggleFavorite, setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
