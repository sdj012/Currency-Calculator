import { createSlice, configureStore, counterSlice } from '@reduxjs/toolkit'

const test = createSlice({
  //Package
  name: 'test',
  initialState: 0,
  reducers: {
    testStore: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("testStore")
      state.value +=1
    },
  }
})

const series = createSlice({
  //Package
  name: 'Series',
  initialState: [ { Size: 400 },{ Size: 800 }, { Size: 1700 } ],
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const createPackage = createSlice({
  //Package
  name: 'Create Package',
  initialState: [{ Size: 400 , Price: 6.49 },{ Size: 800, Price: 12.99 }, { Size: 1700, Price: 25.99}],
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const optionsWORemainder = createSlice({
  //Package
  name: 'OptionsWORemainders',
  initialState: [],
  reducers: {
    setOptions: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("redux store: set Options: ")
      state.value.push(action.payload);
    },
  }
})

const optionsWRemainder = createSlice({
  //Package
  name: 'OptionsWRemainders',
  initialState: [{ Package: [], Remainder: 0, Price: 0 }],
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})


export const { testStore } = test.actions

export const store = configureStore({
  reducer: {
    test: testStore
  }
})


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
