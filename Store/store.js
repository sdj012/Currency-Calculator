import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settingsSlice'
import targetReducer from './targetSlice'
import optionsReducer from './optionsSlice'

export default configureStore({
  reducer: {
    settings: settingsReducer,
    target: targetReducer,
    options: optionsReducer,
  },
})