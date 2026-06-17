import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: () => initialState,
  },
})

export const { increment, decrement, reset } = cartSlice.actions

export const selectCount = (state) => state.cart.count

export default cartSlice.reducer
