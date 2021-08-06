import { createSlice,createAsyncThunk, configureStore, counterSlice } from '@reduxjs/toolkit'
import getOptions from '../Utils'
// Thunk

export const fetchOptions = createAsyncThunk (
  'optionsSlice/fetchOptions',
  async( arg, { getState } ) => {
  let options=[];
  console.log("fetchOptions: " + options)
  const { state } = getState();
  console.log("fetchOptions: configuredSet")
  let bundles=state.settings.configurations.map(configuration => configuration.id);
  options=await configureSet(state.target.value, bundles);
  return options;
})

const options = createSlice({
  //Package
  name: 'options',
  initialState: { options:[] } ,
  reducers: {
    optionsStore: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("optionsStore, action.payload = " + action.payload)
      console.log("state.value is: " + state.value)
    },
  },

  extraReducers:{
    [fetchOptions.fulfilled]: (state,action) => {
      state.options.push(action.payload) // What Thunk Returns
    }
  }
})

export const { optionsStore } = options.actions

export default options.reducer;


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
