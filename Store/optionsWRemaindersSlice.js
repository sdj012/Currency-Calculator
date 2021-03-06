import { createSlice, configureStore, counterSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const withRemainders = createSlice({
  //Package
  name: 'withRemainders',
  initialState: { value: 0 },
  reducers: {
    testStore: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("withRemainders, action.payload = " + action.payload)
      state.value+=1
      console.log("state.value is: " + state.value)
    },
  }
})

export const { withRemaindersStore } = withRemainders.actions

export default withRemainders.reducer;


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
