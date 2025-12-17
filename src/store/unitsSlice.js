import { createSlice } from '@reduxjs/toolkit'
import { UNITS } from '../utils/units.js'

const unitsSlice = createSlice({
  name: 'units',
  initialState: {
    temperature: UNITS.C
  },
  reducers: {
    setTemperatureUnit(state, action) {
      state.temperature = action.payload
    }
  }
})

export const { setTemperatureUnit } = unitsSlice.actions
export default unitsSlice.reducer
