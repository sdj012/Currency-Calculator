import { createSlice, configureStore, counterSlice } from '@reduxjs/toolkit'

const initialState = {  

  configurations:[

    {
      id:400,
      packageCount:400, 
      price: 6.49,
    },

    {
      id:800,
      packageCount:800,
      price:12.99, 
    },

    {
      id:1700,
      packageCount:1700,
      price:25.99,
    }
  
  ]

}

const settings = createSlice({
  //Package
  name: 'settings',
  initialState: initialState,
  reducers: {
    settingsStore: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("settingsStore, action.payload = " + action.payload)
      state.push(action.payload)
      console.log("settings state.value is: " + state.value)
    },
  }
})

export const { settingsStore } = settings.actions

export default settings.reducer;


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
