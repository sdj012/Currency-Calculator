import { createSlice, configureStore, counterSlice } from '@reduxjs/toolkit'

const target = createSlice({
  //Package
  name: 'target',
  initialState: { value: 0 },
  reducers: {
    targetStore: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("targetStore, action.payload = " + action.payload)
      state.value = action.payload
      console.log("targetStore state.target is: " + state.value)
    },
  }
})

export const { targetStore } = target.actions

export default target.reducer;


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
