// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'jobCategory',
  initialState: {
    id: ''
  },
  reducers: {
    handleCategory: (state, action) => {
        state.id = action.payload
    }
  }
})

export const { handleCategory } = categorySlice.actions

export default categorySlice.reducer
