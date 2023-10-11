import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    page: 0,
    product: {
      src: '',
      alt: '',
      name: ''
    }
  },
  reducers: {
    setPage0: (state) => {
      state.page = 0;
    },
    setPage1: (state) => {
      state.page = 1;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPage0, setPage1, setProduct } = homeSlice.actions

export default homeSlice.reducer